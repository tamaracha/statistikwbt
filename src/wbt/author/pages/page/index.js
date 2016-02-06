import templateUrl from './page.jade';
import controller from './page-controller';
export default {
  name: 'page',
  url: '/:page',
  templateUrl,
  controller,
  controllerAs: 'page',
  resolve: {
    jsonpatch: ['$q', function($q){
      return $q(function(resolve,reject){
        require.ensure([],function(){
          const jsonpatch = require('fast-json-patch');
          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
        });
      });
    }],
    page: ['$http', '$stateParams', function($http,$stateParams){
      return $http.get('api/pages/'+$stateParams.page);
    }]
  }
};
