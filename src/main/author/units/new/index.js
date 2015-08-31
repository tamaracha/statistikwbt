import template from './new.jade';
import controller from './new-controller';
export default {
  name: 'new',
  url: '/new',
  controller,
  controllerAs: 'new',
  templateUrl: template,
  ncyBreadcrumb: {
    label: 'Neues Kapitel'
  }
};
