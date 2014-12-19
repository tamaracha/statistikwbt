"use strict";
module.exports=/*@ngInject*/function($q,Restangular){return{
  require: "ngModel",
  restrict: "A",
  link: function(scope,el,attrs,c){
    c.$asyncValidators.userAvailable=function(value){
      var query={};
      query[attrs.name]=value;
      return Restangular.all("users").head(query)
      .then(function(){
        return $q.reject("exists");
      },function(){
        return true;
      });
    };
  }
};};