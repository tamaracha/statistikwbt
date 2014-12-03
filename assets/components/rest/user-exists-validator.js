"use strict";
module.exports=/*@ngInject*/function($q,authService){return{
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
};};