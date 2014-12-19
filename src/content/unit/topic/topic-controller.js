"use strict";
module.exports=/*@ngInject*/function($scope,$stateParams){
  this.topic=_.find($scope.unit.unit.topics,{_id: $stateParams.topic});
};