import image from './image';
import template from './images.jade';
import controller from './images-controller';
export default {
  name: 'images',
  url: '/images',
  templateUrl: template,
  controller,
  controllerAs: 'images',
  resolve: {
    upload: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve){
        require.ensure([],function(){
          require('angular-file-upload');
          return resolve($ocLazyLoad.inject('angularFileUpload'));
        });
      });
    }
  },
  ncyBreadcrumb: {
    label: 'Bilder'
  },
  children: [
    image
  ]
};
