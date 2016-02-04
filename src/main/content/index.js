import templateUrl from './content.jade';
import controller from './content-controller.js';
import unit from './unit';

export default {
  name: 'content',
  url: '/content',
  templateUrl,
  controller,
  controllerAs: 'page',
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  resolve: {
    page: ['$rootScope', '$http', function($rootScope, $http){
      return $http.get('api/pages/'+$rootScope.pages.content._id);
    }]
  },
  children: [
    unit
  ]
};
