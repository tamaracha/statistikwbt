angular.module("wbt")
.directive("userExists",function($q,Restangular){return{
  require: "ngModel",
  restrict: "A",
  link: function(scope,el,attrs,c){
    c.$asyncValidators.userExists=function(value){
      var query={};
      query[attrs.name]=value;
      return Restangular.all("users").head(query).then(function(){
        return true;
      },function(){
        return $q.reject("not exists");
      });
    };
  }
};});