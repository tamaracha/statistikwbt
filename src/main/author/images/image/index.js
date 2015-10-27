import template from './image.jade';
import controller from './image-controller';
export default {
  name: 'image',
  url: '/:image',
  templateUrl: template,
  controller,
  controllerAs: 'image',
  resolve: {
    image: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.all('images').get($stateParams.image,{metadata: true});
    }
  },
  ncyBreadcrumb: {
    label: '{{image.image.filename}}'
  }
};
