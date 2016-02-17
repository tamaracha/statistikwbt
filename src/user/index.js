import angular from 'angular';
import interceptor from './user-interceptor';
import model from './user-model';
import validator from './user-check-validator';
function config($httpProvider){
  $httpProvider.interceptors.push('userInterceptor');
}
config.$inject = ['$httpProvider'];

export default angular.module('user', [])
.config(config)
.factory('userInterceptor',interceptor)
.service('user',model)
.directive('userCheck',validator)
.name;
