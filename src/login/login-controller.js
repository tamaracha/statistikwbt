module.exports=/*@ngInject*/function(identity){
  this.loginData={};
  this.login=function(form){
    return identity.authenticate(form)
    .then(identity.get);
  };
};