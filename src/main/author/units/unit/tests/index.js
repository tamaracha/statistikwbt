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
