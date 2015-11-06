import template from './content.jade';
import controller from './content-controller.js';
import unit from './unit';

export default {
  name: 'content',
  url: '/content',
  templateUrl: template,
  controller,
  controllerAs: 'content',
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  resolve: {
    units: /*@ngInject*/function(Restangular){
      const query = {
        projections: 'title requires',
        options: {sort: 'position'}
      };
      return Restangular.all('units').getList(query);
    }
  },
  children: [
    unit
  ]
};
