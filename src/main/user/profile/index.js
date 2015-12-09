import templateUrl from './profile.jade';
import controller from './profile-controller';

export default {
  name: 'profile',
  url: '/profile',
  templateUrl,
  controller,
  controllerAs: 'profile',
  resolve: {
    jsonpatch: /*@ngInject*/function($q){
      return $q(function(resolve,reject){
        require.ensure([],function(){
          const jsonpatch = require('fast-json-patch');
          return jsonpatch ? resolve(jsonpatch) : reject('jsonpatch not loaded');
        });
      });
    }
  }
};
