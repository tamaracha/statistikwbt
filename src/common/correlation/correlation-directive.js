angular.module("wbt")
.controller("correlationCtrl",function(vega){
  var self=this;
  this.renderer="svg";
  this.data={};
  this.query={
    r: 0,
    len: 30
  };
  this.getData=function(){
    return vega.data("correlation",this.query)
    .then(function(data){
      self.data.table=data;
      return data;
    });
  };
  vega.spec("correlation")
  .then(function(spec){
    self.spec=spec;
  });
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