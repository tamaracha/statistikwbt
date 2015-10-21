import template from './new.jade';
import controller from './new-controller';
export default {
  name: 'new',
  url: '/new',
  templateUrl: template,
  controller,
  controllerAs: 'new'
};
