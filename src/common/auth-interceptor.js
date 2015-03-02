angular.module("wbt")
.factory("authInterceptor",function($q,$localStorage,$injector){
  var request=function(config){
    if(!config.headers.authorization){
      if($localStorage.token){config.headers.authorization="bearer "+$localStorage.token;}
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
    request: request
  };
});