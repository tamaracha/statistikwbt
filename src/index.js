// libraries
import angular from 'angular';
import './angular-locale_de-de';
import uiRouter from 'angular-ui-router';
import 'angular-ui-router.statehelper';
import uiBootstrap from 'angular-ui-bootstrap';
import ngStorage from 'ngstorage';
import ocLazyLoad from 'oclazyload';
import apiCheck from 'api-check';
apiCheck.globalConfig.disabled = true;
import formly from 'angular-formly';
import formlyBootstrap from 'angular-formly-templates-bootstrap';
import wbtText from 'wbt-text';
import 'swagger?type=angular&className=API&esnext=true!../api/swagger.yml';
import user from './user';
import youtube from './youtube';
import 'angular-permission';

import {config, run} from './config.js';
import modals from './modals';
import test from './test-service';

/**
 * @module wbt
 */
export default angular.module('wbt',[
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
  wbtText,
  user,
  'api',
  youtube,
  'permission'
])
.config(config)
.run(run)
.factory('api', ['API', '$localStorage', (API, $localStorage) => {
  const api = new API('api');
  api.setToken($localStorage.token);
  return api;
}])
.service('modals',modals)
.factory('test',test)
.controller('MetaController', ['meta', function(meta){
  this.meta = meta;
}])
.name;

angular.element(document).ready(function(){
  angular.bootstrap(document, ['wbt'], {strictDi: true});
});
