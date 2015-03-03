angular.module("wbt")
.controller("registerCtrl",function(Restangular){
  this.registerData={
    profile: {
      age: 20
    }
  };
  this.getSubjects=function(val){
    return Restangular.all('subjects').getList({search: val});
  };
});