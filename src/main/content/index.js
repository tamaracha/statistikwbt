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
    units: ['$http', function($http){
      const config = {
        method: 'GET',
        url: 'api/units',
        params: {
          projections: 'title requires',
          options: {sort: 'position'}
        }
      };
      return $http(config);
    }],
    meta: ['$http', function($http){
      return $http.get('api/meta/content');
    }]
  },
  children: [
    unit
  ]
};
