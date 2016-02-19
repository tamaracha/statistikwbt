export default function userInterceptor(user){
  function request(config){
    if(config.headers.Authorization){
      return config;
    }
    if(user.token){
      config.headers.Authorization = 'bearer ' + user.token;
    }
    return config;
  }
  return {request};
}
userInterceptor.$inject = ['$localStorage'];
