var angular=require("angular");
module.exports=angular.module("rest",["restangular"])
.config(function(RestangularProvider){
	RestangularProvider.setBaseUrl("/api");
	RestangularProvider.setRestangularFields({id: "_id"});
	RestangularProvider.setDefaultHttpFields({cache: true});
})
.run(require("./auth-interceptor"))
.factory("Users",function(Restangular){
	return Restangular.service("users");
})
.factory("Tokens",function(Restangular){
	return Restangular.service("tokens");
})
.factory("Units",function(Restangular){
	return Restangular.service("units");
})
.factory("authService",require("./auth-service"))
.directive("userAvailable",require("./user-available-validator"))
.directive("userExists",require("./user-exists-validator"))
.name;