import $ from '$';
import _ from 'lodash';
import loginModal from './login';
import changePasswordModal from './change-password';
export default /*@ngInject*/class user{
  constructor($http,$localStorage,$window,$q,$uibModal, api){
    this.api = api;
    this.$http = $http;
    this.$storage = $localStorage;
    this.$q = $q;
    this.$window = $window;
    this.$uibModal = $uibModal;
    this.data = null;
    this.username = $('body').attr('username');
    this.init();
  }
  check(value){
    const config = {
      method: 'HEAD',
      url: 'api/users',
      params: {}
    };
    config.params[this.username] = value;
    return this.$http(config);
  }
  get authenticated(){
    return this.$storage._id && this.$storage.token ? true : false;
  }
  set authenticated(data){
    this.$storage.token = data.token;
    this.$storage._id = data._id;
    this.$storage.role = data.role;
    this.api.setToken(data.token);
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
    return this.$http.get('api/users/'+this.$storage._id)
    .then(
      (res) => {
        this.data = res.data;
        return res;
      },
      (e) => {
        this.inauthenticate();
        return e;
      }
    );
  }
  basicAuth(form){
    const name = form.username;
    const pass = form.password;
    if(!name || !pass){
      throw Error('missing credentials');
    }
    const str = this.$window.btoa(`${name}:${pass}`);
    return `basic ${str}`;
  }
  authenticate(form,init){
    const authorization = this.basicAuth(form);
    const config = {
      method: 'GET',
      url: 'api/tokens/new',
      headers: {authorization}
    };
    return this.$http(config)
    .then((res) => {
      this.authenticated = res.data;
      if(!init){
        return res.data;
      }
      return this.init();
    });
  }
  inauthenticate(){
    this.$storage.$reset();
    this.data = null;
    this.api.token.value = null;
  }
  create(form){
    return this.$http.post('api/users', form)
    .then((res) => {
      this.data = res.data;
      return res;
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
    this.$http.post('api/users/'+this.data._id+'/done', item)
    .then((res) => {
      this.data.done.push(res.data);
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
    return this.$http.delete('api/users/'+this.data._id)
    .then(() => this.inauthenticate());
  }
  login(){
    return this.$uibModal.open(loginModal);
  }
  changePassword(){
    return this.$uibModal.open(changePasswordModal);
  }
}
