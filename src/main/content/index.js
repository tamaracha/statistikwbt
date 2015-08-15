import template from './content.jade';
import controller from './content-controller.js';
import unit from './unit';

export default {
  name: 'content',
  url: '/content',
  template,
  controller,
  controllerAs: 'content',
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  resolve: {
    units: /*@ngInject*/function(Restangular){
      const query = {
        projections: 'title requires',
        options: {sort: 'position'}
      };
      return Restangular.all('units').getList(query);
    },
    markdown: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve){
        require.ensure([],function(){
          const md = require('../../markdown');
          return resolve($ocLazyLoad.inject(md));
        });
      });
    }
  },
  children: [
    unit
  ]
};
