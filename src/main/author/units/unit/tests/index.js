import templateUrl from './tests.html';
import controller from './tests-controller.js';

export default {
  name: 'tests',
  url: '/tests',
  templateUrl,
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
