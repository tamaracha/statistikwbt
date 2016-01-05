import template from './test.jade';
import controller from './test-controller.js';

export default {
  name: 'test',
  url: '/test',
  templateUrl: template,
  controller,
  controllerAs: 'test',
  resolve: {
    tests: /*@ngInject*/function(Restangular, $stateParams){
      return Restangular.one('units',$stateParams.unit).all('summaries').get('test');
    }
  }
};
