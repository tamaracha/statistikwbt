(function(){
"use strict";
angular.module("wbt")
.controller("topicCtrl",["$scope","$stateParams",function($scope,$stateParams){
	this.topic=_.find($scope.unit.unit.topics,{_id: $stateParams.topic});
}]);
}());