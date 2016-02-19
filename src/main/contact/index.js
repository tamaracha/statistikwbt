import templateUrl from './contact.html';
export default {
  name: 'contact',
  url: '/contact',
  templateUrl,
  controller: 'MetaController as contact',
  resolve: {
    meta: ['$http', function($http){
      return $http.get('api/meta/contact');
    }]
  }
};
