angular.module("wbt")
.controller("fskCtrl",function(user,$modalInstance){
  var self=this;
  this.user=user;
  this.sessko=[];
  this.ok=function(){
    return user.createFsk(self.sessko)
    .then($modalInstance.close);
  };
  this.cancel=function(){
  return $modalInstance.dismiss();
  };
});