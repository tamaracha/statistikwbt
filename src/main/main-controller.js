angular.module("wbt")
.controller("mainCtrl",function($state,$stateParams,identity){
  this.$state=$state;
  this.$stateParams=$stateParams;
  this.identity=identity;
});