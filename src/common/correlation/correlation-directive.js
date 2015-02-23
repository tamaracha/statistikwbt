angular.module("wbt")
.controller("correlationCtrl",function($http){
  var self=this;
  this.renderer="svg";
  this.data={};
  this.query={
    r: 0,
    len: 30
  };
  this.getData=function(){
    return $http.post("/ocpu/library/stats/R/rnorm")
    .then(function(data){
      self.data=data;
      return data;
    });
  };
  this.getData();
})
.directive("correlation",function(){
  return {
    restrict: "E",
    controller: "correlationCtrl",
    controllerAs: "correlation",
    bindToController: true,
    scope: {},
    templateUrl: "common/correlation/correlation.html"
  };
});