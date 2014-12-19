"use strict";
module.exports=function(Users,Tokens,authService){
  var self=this;
  this.registerData={};
  this.register=function(){
    return Users.post(self.registerData)
    .then(function(data){
      authService.authenticate(data);
      var email=self.registerData.email;
      var password=self.registerData.password;
      var str=email+":"+password;
      return Tokens.one(email).get({},{Authorization: str});
    },function(){
      return authService.inauthenticate();
    })
    .then(function(data){
      authService.authenticate(null,data);
      console.log(data);
    });
  };
};