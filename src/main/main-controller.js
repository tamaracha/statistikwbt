angular.module("wbt")
.controller("mainCtrl",function($state,$stateParams,user,modal){
  this.$state=$state;
  this.$stateParams=$stateParams;
  this.user=user;
  this.modal=modal;
});