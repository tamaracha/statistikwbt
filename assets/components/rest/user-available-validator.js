angular.module("rest")
.directive("userAvailable",["authService","$q",function(authService,$q){return{
	require: "ngModel",
	restrict: "A",
	link: function(scope,el,attrs,c){
		c.$asyncValidators.userAvailable=function(username){
			return authService.check(attrs.name,username).then(function(){
				return $q.reject("exists");
			},function(){
				return true;
			});
		};
	}
};}]);