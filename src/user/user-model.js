import _ from 'lodash';
import loginModal from './login';
export default /*@ngInject*/class user{
  constructor(Restangular,$localStorage,$window,$q,$uibModal){
    this.Users = Restangular.all('users');
    this.Token = Restangular.one('tokens','new');
    this.$storage = $localStorage;
    this.$q = $q;
    this.$window = $window;
    this.$uibModal = $uibModal;
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
    this.$storage.role = data.role;
  }
  get _id(){
    return this.$storage._id;
  }
  get token(){
    return this.$storage.token;
  }
  get role(){
    return this.$storage.role;
  }
  init(){
    if(!this.authenticated){
      return this.inauthenticate();
    }
    return this.Users.get(this.$storage._id)
    .then(
      (data) => {
        this.data = data;
        return data;
      },
      (e) => {
        this.inauthenticate();
        return e;
      }
    );
  }
  basicAuth(form){
    const name = form.email;
    const pass = form.password;
    if(!name || !pass){
      throw Error('missing credentials');
    }
    const str = this.$window.btoa(`${name}:${pass}`);
    return `basic ${str}`;
  }
  authenticate(form,init){
    const Authorization = this.basicAuth(form);
    return this.Token.get(null,{Authorization})
    .then((data) => {
      this.authenticated = data;
      if(!init){
        return data;
      }
      return this.init();
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
  login(){
    return this.$uibModal.open(loginModal);
  }
}
