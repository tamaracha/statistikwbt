angular.module("wbt")
.factory("authInterceptor",function($localStorage){
  var request=function(config){
    if(!config.headers.authorization){
      if($localStorage.token){
        config.headers.authorization="bearer "+$localStorage.token;
      }
    }
    return config;
  };
  return {
    request: request
  };
});