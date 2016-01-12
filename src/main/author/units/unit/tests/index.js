import template from './tests.jade';
import controller from './tests-controller.js';

export default {
  name: 'tests',
  url: '/tests',
  templateUrl: template,
  controller,
  controllerAs: 'tests',
  ncyBreadcrumb: {
    label: '{{unit.unit.title}} — Testaufgaben'
  },
  resolve: {
    tests: /*@ngInject*/function($http, $stateParams){
      const config = {
        method: 'GET',
        url: 'api/tests',
        params: {
          conditions: {
            unit: $stateParams.unit
          }
        }
      };
      return $http(config);
    }
  }
};
