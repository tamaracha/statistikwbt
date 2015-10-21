import newImage from './new';
import image from './image';
import template from './images.jade';
import controller from './images-controller';
export default {
  name: 'images',
  url: '/images',
  templateUrl: template,
  controller,
  controllerAs: 'images',
  abstract: true,
  resolve: {
    upload: /*@ngInject*/function($q,$ocLazyLoad){
      return $q(function(resolve){
        require.ensure([],function(){
          require('script!angular-upload/angular-upload.min.js');
          return resolve($ocLazyLoad.inject('lr.upload'));
        });
      });
    },
    images: function(Restangular){
      return Restangular.all('images').getList();
    }
  },
  children: [
    newImage,
    image
  ]
};
