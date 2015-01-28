angular.module("wbt")
.run(function(Restangular,$window,identity){
  Restangular.addFullRequestInterceptor(function(el,op,what,url,headers){
    if(headers.Authorization){return;}
    var token=$window.localStorage.getItem("authToken");
    if(!token){return;}
    headers.Authorization="Bearer "+token;
    return {headers: headers};
  });
  Restangular.setErrorInterceptor(function(response,deferred,handler){
    if(response.status===401){
      var token=$window.localStorage.getItem("authToken");
      if(token){return;}
      var loginModal=identity.login();
      return loginModal.result.then(function(){
        return true;
      },function(){
        return false;
      });
    }
    return true;
  });
});