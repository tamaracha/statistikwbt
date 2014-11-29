angular.module("ui",["ui.router"]);
/*
@codekit-append "unit-status-filter.js"
@codekit-append"title-filter.js"
@codekit-append "my-input-directive.js"
@codekit-append "my-submit-directive.js"
@codekit-append "my-menu-item-directive.js"
*/

(function(){
"use strict";
angular.module("ui")
.filter("unitStatus",function(){
	return function(id,user,units){
		var unit,deps;
		if(!id){return;}
		if(!user){user={};}
		// User hat Einheit erledigt
		if(user.done&&_.contains(user.done,id)){
			return "done";
		}
		// User hat Einheit nicht erledigt
		if(!units){
			return "ready";
		}
		// Einheit heraussuchen
		unit=_.find(units,{_id: id});
		if(!unit){
			return;
		}
		// Einheit hat keine Abhängigkeiten
		if(!unit.requires||unit.requires.length===0){
			return "ready";
		}
		// User hat nichts erledigt und es gibt Abhängigkeiten
		if(!user.done||user.done.length===0){
			return "unready";
		}
		// Abhängigkeiten, die User nicht erledigt hat
		deps=_.difference(unit.requires,user.done);
		// keine unerledigten Abhängigkeiten
		if(deps.length===0){
			return "ready";
		}
		// unerledigte Abhängigkeiten
		return "unready";
	};
});
}());

(function(){
"use strict";
angular.module("ui")
.filter("title",function(){
	return function(unit){
		if(!unit.title){return;}
		if(unit.subtitle){return unit.title+": "+unit.subtitle;}
		return unit.title;
	};
});
}());


angular.module("ui")
.directive("myInput",function(){
var uniqueId=0;
return {
	restrict: "AE",
	require: "^form",
	transclude: true,
	scope: {
		label: "@",
	},
	template:
		'<div data-ng-class="{\'has-error\': hasError, \'has-success\': hasSuccess}" class="form-group"><label class="col-xs-2 form-label" data-ng-bind="::label"></label><div data-ng-transclude class="col-xs-10"></div></div>',
	link: function(scope,el,attrs,c){
		var id,name,exp,invalid,valid,touched,hasError,hasSuccess;
		uniqueId++;
		id="input"+uniqueId;
		el.find("label").attr("for",id);
		name=el.find("input").attr("id",id).attr("name");
		exp=c.$name+"."+name;
		invalid=exp+".$invalid";
		valid=exp+".$valid";
		touched=exp+".$touched";
		hasError=scope.$parent.$watch(invalid+"&&"+touched,function(value){
			scope.hasError=value;
		});
		scope.$parent.$on("destroy",hasError());
		hasSuccess=scope.$parent.$watch(valid+"&&"+touched,function(value){
			scope.hasSuccess=value;
		});
		scope.$parent.$on("destroy",hasSuccess());
	}
};});

angular.module("ui")
.directive("mySubmit",function(){return {
	transclude: true,
	require: "^form",
	scope: {value: "@"},
	template: '<div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" class="btn" ng-value="::value" ng-class="{\'btn-primary\': primary, \'btn-danger\': danger}"/></div></div>',
	link: function(scope,el,attrs,c){
		var name=c.$name;
		scope.$parent.$watch(name+".$valid",function(value){
			scope.primary=value;
		});
		scope.$parent.$watch(name+".$invalid",function(value){
			scope.danger=value;
		});
	}
};});

(function(){
"use strict";
angular.module("ui")
.directive("myMenuItem",["$state",function($state){
	return {
		restrict: "A",
		scope: {
			state: "@",
			menuText: "@",
			icon: "@"
		},
		template: 
			'<a ui-sref="{{state}}"><span data-ng-show="icon" data-ng-class="icon" aria-hidden="true"></span><span data-ng-bind="menuText"></span></a>',
		link: function(scope,el){
			var state=$state.get(scope.state).data;
			if(!scope.menuText){scope.menuText=state.menuText;}
			if(!scope.icon&&state.icon){
				scope.icon="glyphicon "+state.icon;
			}
			el.attr("data-ui-sref-active","active");
		}
	};
}]);
}());



angular.module("rest",["restangular"]);
/*
@codekit-append "rest-config.js"
@codekit-append "rest-resources.js"
@codekit-append "auth-service.js"
@codekit-append "user-available-validator.js"
@codekit-append "user-exists-validator.js"
*/

angular.module("rest")
.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl("/api");
	RestangularProvider.setRestangularFields({id: "_id"});
	RestangularProvider.setDefaultHttpFields({cache: true});
}])
.run(["Restangular","authService",function(Restangular,authService){
	Restangular.addFullRequestInterceptor(function(el,op,what,url,headers){
		if(headers.Authorization){return;}
		var token=authService.getToken().token;
		if(!token){return;}
		headers.Authorization="Bearer "+token;
		return {headers: headers};
	});
	authService.init();
}]);

angular.module("rest")
.factory("Users",["Restangular",function(Restangular){
	return Restangular.service("users");
}])
.factory("Tokens",["Restangular",function(Restangular){
	return Restangular.service("tokens");
}])
.factory("Units",["Restangular",function(Restangular){
	return Restangular.service("units");
}]);

angular.module("rest")
.factory("authService",["$window","$q","Users","Tokens",function($window,$q,Users,Tokens){
	var user,loggedIn,getToken,setToken,removeToken,init,logout,basicAuth,getUser,postUser,login,register,check,forgot;
	user={};
	loggedIn=false;
	getToken=function(){
		return {
			token: $window.localStorage.getItem("authToken"),
			id: $window.localStorage.getItem("id")
		};
	};
	setToken=function(token,id){
		$window.localStorage.setItem("authToken",token);
		$window.localStorage.setItem("id",id);
	};
	removeToken=function(){
		$window.localStorage.removeItem("authToken");
		$window.localStorage.removeItem("id");
	};
	init=function(){
		var temp=getToken();
		if(temp.token){
			loggedIn=true;
			user._id=temp.id;
		}
	};
	logout=function(){
		removeToken();
		user={};
		loggedIn=false;
	};
	basicAuth=function(credentials){
		var enc=$window.btoa(credentials._id+":"+credentials.password);
		return Tokens.one(credentials._id).get(
			{},
			{Authorization: "basic "+enc}
		).then(function(tokenData){
			setToken(tokenData, credentials._id);
			loggedIn=true;
			user._id=credentials._id;
			return credentials;
		});
	};
	getUser=function(){
		return Users.one(user._id).get().then(function(userData){
			user=userData;
			return user;
		});
	};
	postUser=function(credentials){
		return Users.post(credentials).then(function(userData){
			user=userData;
			return credentials;
		});
	};
	login=function(credentials){
		basicAuth(credentials)
		.then(getUser);
	};
	register=function(credentials){
		postUser(credentials)
		.then(basicAuth);
	};
	check=function(name,value){
		var query={};
		query[name]=value;
		return Users.getList(query);
	};
	forgot=function(credentials){
		return Tokens.post(credentials);
	};

	return {
		getToken: getToken,
		setToken: setToken,
		removeToken: removeToken,
		init: init,
		user: function(){return user;},
		loggedIn: function(){return loggedIn;},
		login: login,
		logout: logout,
		register: register,
		check: check,
		forgot: forgot
	};
}]);

angular.module("rest")
.directive("userAvailable",["authService","$q",function(authService,$q){return{
	require: "ngModel",
	restrict: "A",
	link: function(scope,el,attrs,c){
		c.$asyncValidators.userAvailable=function(username){
			return authService.check(attrs.name,username).then(function(){
				return $q.reject("exists");
			},function(){
				return true;
			});
		};
	}
};}]);

angular.module("rest")
.directive("userExists",["$q","authService",function($q,authService){return{
	require: "ngModel",
	restrict: "A",
	link: function(scope,el,attrs,c){
		c.$asyncValidators.userExists=function(username){
			return authService.check(attrs.name,username).then(function(){
				return true;
			},function(){
				return $q.reject("not exists");
			});
		};
	}
};}]);



angular.module('d3',[]);
/*
@codekit-append "scale-service.js"
@codekit-append "my-barchart/my-barchart-directive.js"
*/

(function(){
"use strict";
angular.module("d3")
.factory("scale",function(){
	return {
		linear: function(domain,range){
			if(!domain){domain=[0,1];}
			if(!range){range=[0,1];}
			return function(num){
				if(!num){num=0;}
				return (range[1]-range[0])/(domain[1]-domain[0])*(num-domain[0])+range[0];
			};
		}
	};
});
}());

(function(){
"use strict";
angular.module("d3")
.controller("myBarchartCtrl",["$scope","$element",function($scope,$element){
	var self, scale;
	self=this;
	scale.linear=function(){
		return function(num){
			var domain,range;
			domain=[0,1];
			range=[0,1];
			this.domain=function(d){
				if(!d){return domain;}
				domain=d;
			};
			this.range=function(r){
				if(!r){return range;}
				range=r;
			};
			return (range[1]-range[0])/(domain[1]-domain[0])*(num-domain[0])+range[0];
		};
	};
	var testscale=scale.linear().domain([0,100]).range([0,10]);
	console.log(testscale(50));
	this.render=function(data){
		var margin,labelMargin,width,height,counts,barWidth,barPadding,min,max,hScale;
		margin=$scope.margin||10;
		labelMargin=15;
		width=$element[0].clientWidth;
		height=$element[0].clientHeight;
		self.height=height;
		counts=_.countBy(data,$scope.myX);
		self.counts=counts;
		barWidth=width/_.size(counts);
		self.barWidth=barWidth;
		barPadding=$scope.barPadding||2;
		self.barPadding=barPadding;
		min=_.min(counts);
		max=_.max(counts);
		hScale=scale.linear().range([0,height                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ]).domain([min,max]);
		self.scale=scale;
		return data;
	};
	this.render($scope.data);
}])
.directive("myBarchart",function(){
	var labelId=0, descId=0;
	return {
	templateUrl: "components/d3/my-barchart/my-barchart-tpl.html",
	scope: {
		data: "=",
		myX: "@",
		myTitle: "@",
		myDesc: "@",
		margin: "@"
	},
	controller: "myBarchartCtrl",
	bintToController: "myBarchartCtrl",
	controllerAs: "barchart",
	link: function($scope,el,attrs,ctrl){
		$scope.labelId="barchartlabel"+labelId++;
		$scope.descId="barchartdescription"+descId++;
		var cleanData=$scope.$watch('data', function(newVals) {
			return ctrl.render(newVals);
		}, true);
		$scope.$on("$destroy",function(){cleanData();});
	}
};});
}());

/*
				link: function(scope, el) {
					// define render function
					scope.render = function(data){
						// setup variables

						//create the rectangles for the bar chart
						svg.selectAll("rect")
							.data(data)
							.enter()
								.append("rect")
								.attr("role","presentation")
								.attr("fill","teal")
								.on("click", function(d){
									return scope.onClick({item: d});
								})
								.attr("x",function(d,i){
									return margin+i*barWidth;
								})
								.attr("width",barWidth-barPadding)
								.attr("height",function(d){
									return yScale(d[scope.x]);
								})
								.attr("y",function(d){
									return margin+(height-yScale(d[scope.x]));
								});

						svg.selectAll("text")
							.data(data)
							.enter()
								.append("text")
								.attr("x",function(d,i){
									return margin+i*barWidth+(barWidth-barPadding)/2;
								})
								.attr("y", function(d){
									return margin+labelMargin+(height-yScale(d[scope.x]));
								})
								.text(function(d){
									return d[scope.label];
								})
								.attr("font-family","sans-serif")
								.attr("font-size","11px")
								.attr("text-anchor", "middle");


					};
				}
			};
		}]);

}());
					// on window resize, re-render d3 canvas
					window.onresize = function() {
						return scope.$apply();
					};
					var cleanResize=scope.$watch(function(){
							return angular.element(window)[0].innerWidth;
						}, function(){
							return scope.render(scope.data);
						}
					);
					scope.$on("$destroy",function(){cleanResize();});

*/



/*
@codekit-prepend "components/ui/ui-module-ck.js"
@codekit-prepend "components/rest/rest-module-ck.js"
@codekit-prepend "components/d3/d3-ck.js"
*/

(function(){
"use strict";
angular.module("wbt",[
	"ui.router",
	"ui.bootstrap",
	"ngMessages",
	"ngSanitize",
	"ngAria",
	"rest",
	"ui",
	"d3"
])

.config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider,$urlRouterProvider,$locationProvider){
	$locationProvider.html5Mode(true);
$stateProvider.state("home",{
	url: "/home",
	templateUrl: "home/home.html",
	data: {
		menuText: "Statistik für Jedermann",
		icon: "glyphicon-home"
	}
})
.state("content",{
	url: "/content",
	templateUrl: "content/content.html",
	resolve: {
		units: ["Units",function(Units){
			return Units.getList();
		}]
	},
	controller: "contentCtrl as content",
	data: {
		menuText: "Übersicht"
	}
})
.state("content.unit",{
	url: "/:unit",
	templateUrl: "content/unit/unit.html",
	resolve: {
		unit: ["Units","$stateParams",function(Units,$stateParams){
			return Units.one($stateParams.unit).get();
		}]
	},
	controller: "unitCtrl as unit"
})
.state("content.unit.topic",{
	url: "/:topic",
	templateUrl: "content/unit/topic/topic.html",
	controller: "topicCtrl as topic"
})
.state("software",{
	url: "/software",
	templateUrl: "software/software.html",
	data: {
		menuText: "Statistiksoftware"
	}
})
.state("contact",{
	url: "/contact",
	templateUrl: "contact/contact.html",
	data: {
		menuText: "Kontakt und Impressum"
	}
})
.state("user",{
	url: "/user",
	template: "<ui-view/>",
	controller: "userCtrl as user",
	abstract: true
})
.state("user.login",{
	url: "/login",
	templateUrl: "user/login/login.html",
	controller: "loginCtrl as login",
	data: {
		menuText: "Anmelden",
		icon: "glyphicon-log-in"
	}
})
.state("user.register",{
	url: "/register",
	templateUrl: "user/register/register.html",
	controller: "registerCtrl as register",
	data: {
		menuText:"Registrieren",
		icon: "glyphicon-registration-mark"
	}
})
.state("user.profile",{
	url: "/:id?token",
	templateUrl: "user/profile/profile.html",
	data: {
		icon: "glyphicon-user"
	}
});
	$urlRouterProvider.otherwise("/home");
}]);

/*
.run(["$rootScope",function($rootScope){
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
		console.log(error);
	});
}]);
*/
}());

/*
@codekit-append "wbt-controller.js"
@codekit-append "content/content-controller.js"
@codekit-append "content/unit/unit-controller.js"
@codekit-append "content/unit/topic/topic-controller.js"
@codekit-append "user/user-controller.js"
@codekit-append "user/login/login-controller.js"
@codekit-append "user/register/register-controller.js"
*/


(function(){
"use strict";
angular.module("wbt")
.controller("wbtCtrl",["$state","$stateParams","authService",function($state,$stateParams,authService){
	this.$state=$state;
	this.$stateParams=$stateParams;
	this.authService=authService;
}]);
}());

(function(){
"use strict";
angular.module("wbt")
.controller("contentCtrl",["units",function(units){
	this.units=_.sortBy(units,"requires");
}]);
}());

(function(){
"use strict";
angular.module("wbt")
.controller("unitCtrl",["unit",function(unit){
	this.unit=unit;
	this.rating={};
}]);
}());

(function(){
"use strict";
angular.module("wbt")
.controller("topicCtrl",["$scope","$stateParams",function($scope,$stateParams){
	this.topic=_.find($scope.unit.unit.topics,{_id: $stateParams.topic});
}]);
}());

(function(){
"use strict";
angular.module("wbt")
.controller("userCtrl",[function(){
}]);
}());

(function(){
"use strict";
angular.module("wbt")
.controller("loginCtrl",function(){
	this.loginData={};
	this.forgot=false;
});
}());

(function(){
"use strict";
angular.module("wbt")
.controller("registerCtrl",function(){
	this.registerData={};
});
}());

