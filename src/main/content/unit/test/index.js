import template from './test.jade';
import controller from './test-controller.js';

export default {
  name: 'test',
  url: '/test',
  templateUrl: template,
  controller,
  controllerAs: 'test',
  resolve: {
    tests: /*@ngInject*/function($http, $stateParams){
      return $http.get(['api','units',$stateParams.unit,'summaries','test'].join('/'));
    }
  }
};
