import templateUrl from './item.jade';
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
    item: ['api', '$stateParams', function(api,$stateParams){
      return api.getMetaBy_id({_id: $stateParams.meta});
    }]
  }
};
