import template from './tests.jade';
import controller from './tests-controller.js';

export default {
  name: 'tests',
  url: '/tests',
  template,
  controller,
  controllerAs: 'tests',
  ncyBreadcrumb: {
    label: '{{unit.unit.title}} — Testaufgaben'
  },
  resolve: {
    ngTagsInput: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve,reject){
        require.ensure([],function(){
          try{
            require('ng-tags-input/build/ng-tags-input.bootstrap.min.css');
            require('ng-tags-input');
          }
          catch(e){
            return reject('ngTagsInput not loaded');
          }
          return resolve($ocLazyLoad.load({name: 'ngTagsInput'}));
        });
      });
    },
    tests: /*@ngInject*/function(Restangular,$stateParams){
      const query = {
        conditions: {
          unit: $stateParams.unit
        }
      };
      return Restangular.all('tests').getList(query);
    }
  }
};
