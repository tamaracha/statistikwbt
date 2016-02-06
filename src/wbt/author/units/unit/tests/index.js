import template from './tests.jade';
import controller from './tests-controller.js';

export default {
  name: 'tests',
  url: '/tests',
  templateUrl: template,
  controller,
  controllerAs: 'tests',
  resolve: {
    tests: ['$http', '$stateParams', function($http, $stateParams){
      const config = {
        method: 'GET',
        url: 'api/tests',
        params: {
          conditions: {
            unit: $stateParams.unit
          },
          projections: 'text'
        }
      };
      return $http(config);
    }]
  }
};
