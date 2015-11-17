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
    units: /*@ngInject*/function(api){
      const query = {
        projections: 'title requires',
        options: {sort: 'position'}
      };
      return api.getUnits(query);
    },
    meta: /*@ngInject*/function(api){
      return api.getMetaBy_id({_id: 'content'});
    }
  },
  children: [
    unit
  ]
};
