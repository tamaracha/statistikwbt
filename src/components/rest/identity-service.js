module.exports=/*@ngInject*/function($window,$q,Restangular){
  var Users,Tokens,_id,_token,_authenticated,_data;
  Users=Restangular.all("users");
  Tokens=Restangular.all("tokens");
  _id=null;
  _token=null;
  _authenticated=false;

  var init=function(){
    var id,token;
    id=$window.localStorage.getItem("id");
    token=$window.localStorage.getItem("authToken");
    return $q(function(resolve,reject){
      if(id!==null&&token!==null){
        _id=id;
        _token=token;
        _authenticated=true;
        return resolve(_authenticated);
      }
      else{return reject("inauthenticated");}
    });
  };
  var authenticated=function(){return _authenticated;};
  var data=function(){return _data;}
  var authenticate=function(form){
    var email,password;
    email=form.email;
    password=form.password;
    return $q(function(resolve,reject){
      if(!email||!password){return reject("form incomplete");}
      return resolve(Tokens.get(email,{},{
        Authorization: email+":"+password
      })
      .then(function(result){
        var id,token;
        id=result._id;
        token=result.token;
        if(id){
          _id=id;
          $window.localStorage.setItem("id",id);
        }
        if(token){
          _token=token;
          $window.localStorage.setItem("authToken",token);
        }
        if(id!==null&&token!==null){_authenticated=true;}
        return id;
      }));
    });
  };
  var inauthenticate=function(){
    _id=null;
    $window.localStorage.removeItem("id");
    _token=null;
    $window.localStorage.removeItem("authToken");
    _authenticated=false;
    _data=null;
  };
  var get=function(){
    return Users.get(_id)
    .then(function(result){
      _data=result;
      return result;
    });
  };
  var update=function(){
    if(!_data){return;}
    return _data.put();
  };
  var remove=function(){
    return _data.remove();
  };
  var create=function(form){
    return Users.post(form)
    .then(function(result){
      _data=result;
      return result;
    });
  };
  return {
    init: init,
    authenticate: authenticate,
    inauthenticate: inauthenticate,
    authenticated: authenticated,
    data: data,
    get: get,
    update: update,
    remove: remove,
    create: create
  };
};