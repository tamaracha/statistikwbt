"use strict";
module.exports=/*@ngInject*/function($state,$stateParams,authService){
	this.$state=$state;
	this.$stateParams=$stateParams;
	this.authService=authService;
};