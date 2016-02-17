import templateUrl from './test.html';
import controller from './test-controller';
export default {
  name: 'test',
  url: '/:test',
  templateUrl,
  controller,
  controllerAs: 'test',
  resolve: {
    test: ['$http', '$stateParams', function($http, $stateParams){
      return $http.get('api/tests/'+$stateParams.test);
    }]
  }
};
