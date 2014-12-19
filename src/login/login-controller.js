"use strict";
module.exports=function($window,authService,Tokens){
  var self=this;
  this.loginData={};
  this.login=function(){
    var email=self.loginData.email;
    var password=self.loginData.password;
    if(!email||!password){return;}
    var str=email+":"+password;
    Tokens.one(email).get({},{Authorization: str})
    .then(function(data){
      authService.authenticate(null,data);
      return authService.identity();
    },function(){
      return authService.inauthenticate();
    });
  };
};