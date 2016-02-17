import templateUrl from './akzeptanz.html';
import controller from './akzeptanz-controller.js';

export default {
  templateUrl,
  controller,
  controllerAs: 'akzeptanz',
  animation: false,
  resolve: {
    summary: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.one('units',$stateParams.unit).one('summaries','akzeptanz').get();
    }
  }
};
