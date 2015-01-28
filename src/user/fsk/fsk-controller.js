angular.module("wbt")
.controller("fskCtrl",function(identity,$modalInstance){
  var self=this;
  this.identity=identity;
  this.sessko=[];
  this.ok=function(){
    return identity.createFsk(self.sessko)
    .then($modalInstance.close);
  };
  this.cancel=function(){
  return $modalInstance.dismiss();
  };
});