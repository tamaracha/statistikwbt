import template from './author.jade';

import units from './units';
import vega from './vega';

export default {
  name: 'author',
  url: '/author',
  template,
  data: {
    permissions: {
      except: ['anonymous']
    }
  },
  resolve: {
    markdown: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve){
        require.ensure([],function(){
          const md = require('../../markdown');
          return resolve($ocLazyLoad.inject(md));
        });
      });
    },
    breadcrumb: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve){
        require.ensure([],function(){
          require('angular-breadcrumb');
          return resolve($ocLazyLoad.inject('ncy-angular-breadcrumb'));
        });
      });
    }
  },
  ncyBreadcrumb: {
    label: 'Autorentool'
  },
  children: [
    units,
    vega
  ]
};
