angular.module("wbt")
.controller("loginCtrl",function(identity,$modalInstance,$q){
  var self=this;
  this.loginData={};
  this.message="";
  this.login=function(){
    return identity.authenticate(this.loginData)
    .then(identity.get,function(res){
      self.message=res.data||res;
      return $q.reject(res);
    })
    .then(function(id){
      $modalInstance.close(id);
    },identity.inauthenticate);
  };
  this.cancel=function(){
    $modalInstance.dismiss("cancel");
  };
});