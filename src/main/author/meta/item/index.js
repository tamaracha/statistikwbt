import templateUrl from './item.jade';
import controller from './item-controller';
export default {
  name: 'item',
  url: '/:meta',
  templateUrl,
  controller,
  controllerAs: 'item',
  ncyBreadcrumb: {
    label: '{{main.items[$stateParams.meta].menu}}'
  },
  resolve: {
    jsonpatch: /*@ngInject*/function($q){
      return $q(function(resolve,reject){
        require.ensure([],function(){
          const jsonpatch = require('fast-json-patch');
          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
        });
      });
    },
    item: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.one('meta',$stateParams.meta).get();
    }
  }
};
