angular.module('wbt')
.service('user',User);
function User($localStorage,$q,$state,$modal,Restangular){
  this.$q=$q;
  this.$state=$state;
  this.$modal=$modal;
  this.Users=Restangular.all('users');
  this.Tokens=Restangular.all('tokens');
  this.$storage=$localStorage;
  if(this.authenticated){this.fetch();}
  else{this.inauthenticate();}
}
Object.defineProperty(User.prototype,'authenticated',{
  get: function(){
    return this.$storage._id&&this.$storage.token ? true : false;
  }
});
User.prototype.fetch=function(){
  var user=this;
  return this.Users.get(this.$storage._id)
  .then(function(data){
    user.data=data;
  });
};
User.prototype.authenticate=function(form){
  var user=this;
  return this.$q(function(resolve,reject){
    var email,password;
    email=form.email;
    password=form.password;
    if(!email||!password){return reject("form incomplete");}
    return resolve(user.Tokens.get("login",{},{
      Authorization: email+":"+password
    }));
  })
  .then(function(result){
    user.$storage._id=result._id;
    user.$storage.token=result.token;
    return user.$storage._id;
  });
};
User.prototype.inauthenticate=function(){
  this.$storage.$reset();
  delete this.data;
};
User.prototype.update=function(){
  return this.data.put();
};
User.prototype.remove=function(){
  return this.data.remove();
};
User.prototype.create=function(form){
  var user=this;
  return this.Users.post(form)
  .then(function(data){
    user.data=data;
    return user.authenticate({
      email: form.email,
      password: form.password
    });
  })
  .then(function(){
    user.$state.go('main.content');
  });
};
User.prototype.login=function(){
  return this.$modal.open({
    templateUrl: "login/login.html",
    controller: "loginCtrl",
    controllerAs: "login"
  });
};
User.prototype.fsk=function(){
  return this.$modal.open({
    templateUrl: "user/fsk/fsk.html",
    controller: "fskCtrl",
    controllerAs: "fsk",
    size: "lg"
  });
};
User.prototype.createFsk=function(sessko){
  if(!this.data.fsk){this.data.fsk=[];}
  this.data.fsk.push({sessko: sessko});
  return this.data.patch({fsk: this.data.fsk});
};
User.prototype.complete=function(unit){
  if(!this.authenticated||!this.data||!this.data.complete){return false;}
  return _.contains(this.data.complete,unit);
};
User.prototype.setComplete=function(unit){
  if(!this.data.complete){this.data.complete=[];}
  this.data.complete.push(unit);
  return this.data.patch({complete: this.data.complete});
};
User.prototype.requiresComplete=function(requires){
  if(!requires||requires.length===0){return true;}
  if(!this.authenticated||!this.data||!this.data.complete){return false;}
  var complete=true;
  _.forEach(requires,function(require){
    if(_.contains(this.data.complete,require)){return;}
    if(!complete){return;}
    complete=false;
  });
  return complete;
};
