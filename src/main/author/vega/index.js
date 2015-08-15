import template from './vega.jade';
import controller from './vega-controller';
export default {
  name: 'vega',
  url: '/vega',
  template,
  controller,
  controllerAs: 'vega',
  resolve: {
    specs: /*@ngInject*/function(Restangular){
      const query = {
        projections: 'name'
      };
      return Restangular.all('vega').getList(query);
    }
  }
};
