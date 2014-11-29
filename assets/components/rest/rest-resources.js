angular.module("rest")
.factory("Users",["Restangular",function(Restangular){
	return Restangular.service("users");
}])
.factory("Tokens",["Restangular",function(Restangular){
	return Restangular.service("tokens");
}])
.factory("Units",["Restangular",function(Restangular){
	return Restangular.service("units");
}]);