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

