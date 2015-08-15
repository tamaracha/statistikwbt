// libraries
import angular from 'angular';
import lodash from 'lodash';
import uiRouter from 'angular-ui-router';
import 'ng-annotate?add=true!angular-ui-router.stateHelper';
import uiBootstrap from 'angular-ui-bootstrap';
import 'ngstorage';
import ocLazyLoad from 'oclazyload';
import apiCheck from 'api-check';
apiCheck.globalConfig.disabled = true;
import formly from 'angular-formly';
import formlyBootstrap from 'source-map!angular-formly-templates-bootstrap';
import 'angular-permission';

import {config, run} from './config.js';
import * as user from './user';
import modals from './modals';
import plot from './plot';
export default angular.module('wbt',[
  'restangular',
  uiRouter,
  'ui.router.stateHelper',
  uiBootstrap,
  'ngMessages',
  'ngAria',
  'ngAnimate',
  'ngSanitize',
  'ngStorage',
  ocLazyLoad,
  formly,
  formlyBootstrap,
  'permission',
  plot
])
.constant('lodash',lodash)
.config(config)
.run(run)
.factory('userInterceptor',user.interceptor)
.service('user',user.model)
.directive('userCheck',user.validator)
.service('modals',modals)
.name;
