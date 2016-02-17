import image from './image';
import templateUrl from './images.html';
import controller from './images-controller';
export default {
  name: 'images',
  url: '/images',
  templateUrl,
  controller,
  controllerAs: 'images',
  resolve: {
    upload: ['$q', '$ocLazyLoad', function($q,$ocLazyLoad){
      return $q(function(resolve){
        require.ensure([],function(){
          require('angular-file-upload');
          return resolve($ocLazyLoad.inject('angularFileUpload'));
        });
      });
    }]
  },
  children: [
    image
  ]
};
