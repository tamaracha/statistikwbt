import templateUrl from './video.jade';
import controller from './video-controller';
export default {
  name: 'video',
  url: '/:video',
  templateUrl,
  controller,
  controllerAs: 'video',
  resolve: {
    video: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.all('videos').get($stateParams.video,{metadata: true});
    }
  },
  ncyBreadcrumb: {
    label: '{{video.video.filename}}'
  }
};
