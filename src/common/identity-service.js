angular.module("wbt")
.factory("identity",function($window,$q,Restangular,$state,$modal){
  var Users,Tokens,_id,_token,_authenticated,_data;
  Users=Restangular.all("users");
  Tokens=Restangular.all("tokens");
  _id=$window.localStorage.getItem("id");
  _token=$window.localStorage.getItem("authToken");
  _authenticated=_id&&_token ? true : false;
  if(_authenticated){
    Users.get(_id)
    .then(function(data){
      _data=data;
    });
  }

  var authenticated=function(){return _authenticated;};
  var authenticatedAsync=function(){
    return $q(function(resolve,reject){
      return _authenticated ? resolve(true) : reject(false);
    });
  };
  var token=function(){return _token;};
  var data=function(){return _data;};
  var authenticate=function(form){
    var email,password;
    email=form.email;
    password=form.password;
    return $q(function(resolve,reject){
      if(!email||!password){return reject("form incomplete");}
      return resolve(Tokens.get("login",{},{
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
  var getSubjects=function(value){
    return Restangular.all("subjects").getList({search: value});
  };
  var register=function(form){
    return create(form)
    .then(function(){
      return authenticate({
        email: form.email,
        password: form.password
      });
    })
    .then(function(){
      return $state.go("main.content");
    })
    .catch(inauthenticate);
  };
  var login=function(){
    return $modal.open({
      templateUrl: "login/login.html",
      controller: "loginCtrl",
      controllerAs: "login"
    });
  };
  var fsk=function(){
    return $modal.open({
      templateUrl: "user/fsk/fsk.html",
      controller: "fskCtrl",
      controllerAs: "fsk",
      size: "lg"
    });
  };
  var createFsk=function(sessko){
    if(!_data.fsk){_data.fsk=[];}
    _data.fsk.push({sessko: sessko});
    return _data.patch({fsk: _data.fsk});
  };
  var complete=function(unit){
    if(!_authenticated||!_data||!_data.complete){return false;}
    return _.contains(_data.complete,unit);
  };
  var setComplete=function(unit){
    if(!_data.complete){_data.complete=[];}
    _data.complete.push(unit);
    return _data.patch({complete: _data.complete});
  };
  var requiresComplete=function(requires){
    if(!requires||requires.length===0){return true;}
    if(!_authenticated||!_data||!_data.complete){return false;}
    var complete=true;
    _.forEach(requires,function(require){
      if(_.contains(_data.complete,require)){return;}
      if(!complete){return;}
      complete=false;
    });
    return complete;
  };
  return {
    authenticate: authenticate,
    inauthenticate: inauthenticate,
    authenticated: authenticated,
    authenticatedAsync: authenticatedAsync,
    data: data,
    token: token,
    get: get,
    update: update,
    remove: remove,
    create: create,
    getSubjects: getSubjects,
    register: register,
    login: login,
    fsk: fsk,
    createFsk: createFsk,
    complete: complete,
    setComplete: setComplete,
    requiresComplete: requiresComplete
  };
});