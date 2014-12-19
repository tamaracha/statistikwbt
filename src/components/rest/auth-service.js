"use strict";
module.exports=/*@ngInject*/function($window,$q,Users){
  var self=this;
  var _identity=undefined;
  var _authenticated=false;
  this.authenticated=function(){return _authenticated;}
  this.authenticate=function(identity,token){
    if(identity){
      _identity=identity;
      _authenticated=true;
    }
    if(token){
      $window.localStorage.setItem("authToken",token.token);
      $window.localStorage.setItem("id",token._id);
    }
  };
  this.inauthenticate=function(){
    _identity=undefined;
    _authenticated=false;
    $window.localStorage.removeItem("authToken");
    $window.localStorage.removeItem("id");
  };
  this.identity=function(){
    return $q(function(resolve,reject){
    if(_authenticated){return reject(_identity);}
    var token=$window.localStorage.getItem("authToken");
    var id=$window.localStorage.getItem("id");
    if(!token||!id){return reject(_identity);}
    return Users.one(id).get()
    .then(function(data){
      return self.authenticate(data);
    },function(){
      return self.inauthenticate();
    })
    .finally(function(){
      return resolve(_identity);
    });
    });
  };
return this;
};