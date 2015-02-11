angular.module("wbt")
.controller("loginCtrl",function(identity,$modalInstance,$q){
  var self=this;
  this.loginData={};
  this.message="";
  this.login=function(){
    return identity.authenticate(this.loginData)
    .then(identity.get,function(res){
      self.message=res.data||res;
      $q.reject(res);
    })
    .then(function(data){
      return $modalInstance.close(data._id);
    });
  };
  this.cancel=function(){
    $modalInstance.dismiss("cancel");
  };
});