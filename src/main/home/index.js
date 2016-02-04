import templateUrl from './home.jade';
export default {
  name: 'home',
  url: '/home',
  templateUrl,
  controller: 'PageController as page',
  resolve: {
    page: ['$rootScope', '$http', function($rootScope, $http){
      return $http.get('api/pages/'+$rootScope.pages.home._id);
    }]
  }
};
