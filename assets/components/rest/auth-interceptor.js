"use strict";
module.exports=/*@ngInject*/function(Restangular,authService){
	Restangular.addFullRequestInterceptor(function(el,op,what,url,headers){
		if(headers.Authorization){return;}
		var token=authService.getToken().token;
		if(!token){return;}
		headers.Authorization="Bearer "+token;
		return {headers: headers};
	});
	authService.init();
};