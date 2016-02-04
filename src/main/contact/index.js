import template from './contact.jade';
export default {
  name: 'contact',
  url: '/contact',
  templateUrl: template,
  controller: 'PageController as page',
  resolve: {
    page: ['$rootScope', '$http', function($rootScope, $http){
      return $http.get('api/pages/'+$rootScope.pages.contact._id);
    }]
  }
};
