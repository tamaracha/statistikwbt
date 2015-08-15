export default /*@ngInject*/function userInterceptor($localStorage){
  function request(config){
    if(config.headers.authorization){
      return config;
    }
    if($localStorage.token){
      config.headers.authorization = 'bearer ' + $localStorage.token;
    }
    return config;
  }
  return {request};
}
