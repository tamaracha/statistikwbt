angular.module("wbt")
.controller("correlationCtrl",function(Restangular){
  var self=this;
  this.cor=0.5;
  this.getData=function(){
    return Restangular.all("rio").all("corgen").get(this.cor)
    .then(function(data){
      self.data={table: data};
    });
  };
  Restangular.all("vega").get("scatterplot")
  .then(function(spec){
    self.spec=spec;
  });
})
.directive("correlation",function(){
  return {
    controller: "correlationCtrl",
    controllerAs: "correlation",
    templateUrl: "common/correlation/correlation.html"
  };
});