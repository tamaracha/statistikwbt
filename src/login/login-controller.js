angular.module("wbt")
.controller("loginCtrl",function(user,$modalInstance,$q){
  var self=this;
  this.loginData={};
  this.message="";
  this.login=function(){
    return user.authenticate(this.loginData)
    .then(function(){
      return user.fetch();
    })
    .then(function(data){
      return $modalInstance.close(data._id);
    })
    .catch(function(res){
      self.message=res.data||res;
      return res;
    });
  };
  this.cancel=function(){
    $modalInstance.dismiss("cancel");
  };
});