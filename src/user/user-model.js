const _ = require('lodash');
export default /*@ngInject*/class user{
  constructor(Restangular,$localStorage,$window,$q){
    this.Users = Restangular.all('users');
    this.Token = Restangular.one('tokens','new');
    this.$storage = $localStorage;
    this.$q = $q;
    this.$window = $window;
    this.data = null;
    this.init();
  }
  check(name,value){
    const query = {};
    query[name] = value;
    return this.Users.head(query);
  }
  get authenticated(){
    return this.$storage._id && this.$storage.token ? true : false;
  }
  set authenticated(data){
    this.$storage.token = data.token;
    this.$storage._id = data._id;
  }
  get _id(){
    return this.$storage._id;
  }
  get token(){
    return this.$storage.token;
  }
  init(){
    return this.$q((resolve,reject) => {
      if(!this.authenticated){
        this.inauthenticate();
        return reject('inauthenticated');
      }
      return resolve(this.Users.get(this.$storage._id));
    })
    .then((data) => {
      this.data = data;
      return data;
    });
  }
  authenticate(form,init){
    return this.$q((resolve,reject) => {
      const name = form.email;
      const pass = form.password;
      if(!name || !pass){
        return reject('missing credentials');
      }
      const str = this.$window.btoa(`${name}:${pass}`);
      const authorization = `basic ${str}`;
      return resolve(this.Token.get(null,{authorization}));
    })
    .then((data) => {
      this.authenticated = data;
      if(init){
        return this.init();
      }
      return data;
    });
  }
  inauthenticate(){
    this.$storage.$reset();
    this.data = null;
  }
  create(form){
    return this.Users.post(form)
    .then((data) => {
      this.data = data;
      return data;
    });
  }
  addUnit(id){
    const included = _.includes(this.data.done,id);
    if(included){
      return;
    }
    const item = {
      unit: id
    };
    this.data.all('done').post(item)
    .then((data) => {
      this.data.done.push(data);
    });
  }
  complete(unit){
    if(!this.authenticated){
      return false;
    }
    return _.some(this.data.done,{unit: unit});
  }
  requiresComplete(requires){
    if(!this.authenticated){
      return false;
    }
    return _.every(requires,function(val){
      return _.some(this.data.done,{unit: val});
    },this);
  }
  remove(){
    return this.data.remove()
    .then(() => this.inauthenticate());
  }
}
