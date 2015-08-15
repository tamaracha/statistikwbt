import template from './download.jade';
import controller from './download-controller.js';
export default {
  name: 'download',
  url: '/download',
  template,
  controller,
  controllerAs: 'download',
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  resolve: {
    units: /*@ngInject*/function(Restangular){
      const query = {
        projections: 'title'
      };
      return Restangular.all('units').getList(query);
    }
  }
};
