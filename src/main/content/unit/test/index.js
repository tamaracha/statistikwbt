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
      return $http.get(['api','units',$stateParams.unit,'summaries','test'].join('/'));
    }]
  }
};
