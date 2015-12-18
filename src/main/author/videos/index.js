import video from './video';
import templateUrl from './videos.jade';
import controller from './videos-controller';
export default {
  name: 'videos',
  url: '/videos',
  templateUrl,
  controller,
  controllerAs: 'videos',
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
    label: 'Videos'
  },
  children: [
    video
  ]
};
