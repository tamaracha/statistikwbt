module.exports=function(identity){
  this.registerData={};
  this.register=function(form){
    return identity.create(form)
    .then(function(){
      return {
        email: form.email,
        password: form.password
      };
    })
    .then(identity.authenticate)
    .catch(identity.inauthenticate);
  };
};