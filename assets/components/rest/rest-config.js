angular.module("rest")
.config(["RestangularProvider",function(RestangularProvider){
	RestangularProvider.setBaseUrl("/api");
	RestangularProvider.setRestangularFields({id: "_id"});
	RestangularProvider.setDefaultHttpFields({cache: true});
}])
.run(["Restangular","authService",function(Restangular,authService){
	Restangular.addFullRequestInterceptor(function(el,op,what,url,headers){
		if(headers.Authorization){return;}
		var token=authService.getToken().token;
		if(!token){return;}
		headers.Authorization="Bearer "+token;
		return {headers: headers};
	});
	authService.init();
}]);