import template from './image.jade';
import controller from './image-controller';
export default {
  name: 'image',
  url: '/:image',
  templateUrl: template,
  controller,
  controllerAs: 'image',
  ncyBreadcrumb: {
    label: '{{image.image.name}}'
  }
};
