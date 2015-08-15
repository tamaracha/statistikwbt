import template from './akzeptanz.jade';
import controller from './akzeptanz-controller.js';

export default {
  template,
  controller,
  controllerAs: 'akzeptanz',
  animation: false,
  resolve: {
    summary: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.one('units',$stateParams.unit).one('summaries','akzeptanz').get();
    }
  }
};
