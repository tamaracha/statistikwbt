export default function userInterceptor($localStorage){
  function request(config){
    if(config.headers.Authorization){
      return config;
    }
    if($localStorage.token){
      config.headers.Authorization = 'bearer ' + $localStorage.token;
    }
    return config;
  }
  return {request};
}
userInterceptor.$inject = ['$localStorage'];
