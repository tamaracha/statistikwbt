var angular=require("angular");
module.exports=angular.module("rest",["restangular"])
.config(function(RestangularProvider){
  RestangularProvider.setBaseUrl("/api");
  RestangularProvider.setRestangularFields({id: "_id"});
})
.run(require("./auth-interceptor"))
.factory("identity",require("./identity-service"))
.factory("content",require("./unit-service"))
.directive("userAvailable",require("./user-available-validator"))
.directive("userExists",require("./user-exists-validator"))
.directive("testItem",require("./test-item-directive"))
.name;