// libraries
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-ui-router.statehelper';
import uiBootstrap from 'angular-ui-bootstrap';
import ngStorage from 'ngstorage';
import ocLazyLoad from 'oclazyload';
import apiCheck from 'api-check';
apiCheck.globalConfig.disabled = true;
import formly from 'angular-formly';
import formlyBootstrap from 'angular-formly-templates-bootstrap';
import 'angular-permission';
import wbtText from 'wbt-text';
import './api';

import {config, run} from './config.js';
import * as user from './user';
import modals from './modals';

/**
 * @module wbt
 */
export default angular.module('wbt',[
  'restangular',
  uiRouter,
  'ui.router.stateHelper',
  uiBootstrap,
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngSanitize',
  ngStorage.name,
  ocLazyLoad,
  formly,
  formlyBootstrap,
  'permission',
  wbtText,
  'api'
])
.config(config)
.run(run)
.factory('api',/*@ngInject*/(API) => {
  return new API('api');
})
.factory('userInterceptor',user.interceptor)
.service('user',user.model)
.directive('userCheck',user.validator)
.service('modals',modals)
.name;
