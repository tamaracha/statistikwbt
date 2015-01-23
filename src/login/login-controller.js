module.exports=/*@ngInject*/function(identity,$modalInstance){
  var self=this;
  this.loginData={};
  this.login=function(){
    return identity.authenticate(self.loginData)
    .then(identity.get)
    .then(function(id){
      $modalInstance.close(id);
    },identity.inauthenticate);
  };
  this.cancel=function(){
    $modalInstance.dismiss("cancel");
  };
};