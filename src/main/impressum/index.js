import templateUrl from './impressum.html';
export default {
  name: 'impressum',
  url: '/impressum',
  templateUrl,
  controller: 'MetaController as impressum',
  resolve: {
    meta: ['$http', function($http){
      return $http.get('api/meta/impressum');
    }]
  }
};
