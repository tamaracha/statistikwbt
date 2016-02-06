import angular from 'angular';
import interceptor from './user-interceptor';
import model from './user-model';
import validator from './user-check-validator';

/**
 * @module wbt.user
 */

export default angular.module('wbt.user', [])
.config(['$httpProvider', function($httpProvider){
  $httpProvider.interceptors.push('userInterceptor');
}])
.factory('userInterceptor',interceptor)
.service('user',model)
.directive('userCheck',validator)
.name;
