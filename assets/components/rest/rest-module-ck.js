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

