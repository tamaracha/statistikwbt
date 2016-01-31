import templateUrl from './content.jade';
import controller from './content-controller.js';
import unit from './unit';

export default {
  name: 'content',
  url: '/content',
  templateUrl,
  controller,
  controllerAs: 'content',
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  resolve: {
    units: ['api', function(api){
      const query = {
        projections: 'title requires',
        options: {sort: 'position'}
      };
      return api.getUnits(query);
    }],
    meta: ['api', function(api){
      return api.getMetaBy_id({_id: 'content'});
    }]
  },
  children: [
    unit
  ]
};
