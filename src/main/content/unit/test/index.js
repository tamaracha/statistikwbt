import template from './test.jade';
import controller from './test-controller.js';

export default {
  name: 'test',
  url: '/test',
  template,
  controller,
  controllerAs: 'test',
  resolve: {
    tests: /*@ngInject*/function(Restangular,$stateParams){
      const query = {
        conditions: {unit: $stateParams.unit},
        mode: 'exercise'
      };
      return Restangular.all('tests').getList(query);
    }
  }
};
