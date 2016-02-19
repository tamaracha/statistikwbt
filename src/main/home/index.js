import templateUrl from './home.html';
export default {
  name: 'home',
  url: '/home',
  templateUrl,
  controller: 'MetaController as home',
  resolve: {
    meta: ['$http', function($http){
      return $http.get('api/meta/home');
    }]
  }
};
