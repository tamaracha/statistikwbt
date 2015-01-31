angular.module("wbt")
.controller("registerCtrl",function($state,Restangular,identity){
  var self=this;
  this.registerData={};
  this.getSubjects=function(search){
    return Restangular.all("subjects").getList({search: search});
  };
  this.register=function(form){
    return identity.create(form)
    .then(function(){
      return {
        email: form.email,
        password: form.password
      };
    })
    .then(identity.authenticate)
    .then(function(){
      return $state.go("content");
    })
    .catch(identity.inauthenticate);
  };
});