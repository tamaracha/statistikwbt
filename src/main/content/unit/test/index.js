import templateUrl from './test.html';
import controller from './test-controller.js';

export default {
  name: 'test',
  url: '/test',
  templateUrl,
  controller,
  controllerAs: 'test',
  resolve: {
    tests: ['$http', '$stateParams', function($http, $stateParams){
      return $http.get('api/tests', {params: {conditions: {unit: $stateParams.unit}}});
    }],
    guess: ['$http', '$stateParams', 'tests', function($http, $stateParams, tests){
      return $http.get('api/guesses/newest', {params: {conditions: {unit: $stateParams.unit}, length: tests.data.length}});
    }]
  }
};
