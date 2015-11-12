import template from './author.jade';

import meta from './meta';
import units from './units';
import images from './images';

export default {
  name: 'author',
  url: '/author',
  templateUrl: template,
  data: {
    permissions: {
      only: ['author']
    }
  },
  resolve: {
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
    meta,
    units,
    images
  ]
};
