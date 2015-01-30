angular.module("wbt")
.factory("authInterceptor",function($q,$window,$injector){
  var request=function(config){
    if(!config.headers.authorization){
      var token=$window.localStorage.getItem("authToken");
      if(token){config.headers.authorization="bearer "+token;}
    }
    return config;
  };
  var responseError=function(response){
    if(response.status===401&&response.data==="Unauthorized"){
      var identity=$injector.get("identity");
      var $http=$injector.get("$http");
      var deferred=$q.defer();
      var loginModal=identity.login();
      loginModal.result.then(deferred.resolve,deferred.reject);
      return deferred.promise.then(function(){
        return $http(response.config);
      });
    }
    return $q.reject(response);
  };
  return {
    request: request,
    responseError: responseError
  };
});