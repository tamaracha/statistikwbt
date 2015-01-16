module.exports=/*@ngInject*/function($state,$stateParams,identity,$modal){
  this.$state=$state;
  this.$stateParams=$stateParams;
  this.identity=identity;
  identity.init()
  .then(identity.get)
  .catch(identity.inauthenticate);
};