import template from './download.jade';
import controller from './download-controller.js';
export default {
  name: 'download',
  url: '/download',
  templateUrl: template,
  controller,
  controllerAs: 'download',
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
        params: {projections: 'title'}
      };
      return $http(config);
    }]
  }
};
