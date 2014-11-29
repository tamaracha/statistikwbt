(function(){
"use strict";
angular.module("wbt")
.controller("contentCtrl",["units",function(units){
	this.units=_.sortBy(units,"requires");
}]);
}());