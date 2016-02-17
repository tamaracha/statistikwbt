import templateUrl from './item.html';
import controller from './item-controller';
export default {
  name: 'item',
  url: '/:meta',
  templateUrl,
  controller,
  controllerAs: 'item',
  resolve: {
    jsonpatch: ['$q', function($q){
      return $q(function(resolve,reject){
        require.ensure([],function(){
          const jsonpatch = require('fast-json-patch');
          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
        });
      });
    }],
    item: ['$http', '$stateParams', function($http,$stateParams){
      return $http.get('api/meta/'+$stateParams.meta);
    }]
  }
};
