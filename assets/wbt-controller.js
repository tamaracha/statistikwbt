(function(){
"use strict";
angular.module("wbt")
.controller("wbtCtrl",["$state","$stateParams","authService",function($state,$stateParams,authService){
	this.$state=$state;
	this.$stateParams=$stateParams;
	this.authService=authService;
}]);
}());