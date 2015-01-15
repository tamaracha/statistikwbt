module.exports=/*@ngInject*/function(Restangular,$window){
  Restangular.addFullRequestInterceptor(function(el,op,what,url,headers){
    if(headers.Authorization){return;}
    var token=$window.localStorage.getItem("authToken");
    if(!token){return;}
    headers.Authorization="Bearer "+token;
    return {headers: headers};
  });
};