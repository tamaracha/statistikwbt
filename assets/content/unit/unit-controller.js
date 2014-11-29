(function(){
"use strict";
angular.module("wbt")
.controller("unitCtrl",["unit",function(unit){
	this.unit=unit;
	this.rating={};
}]);
}());