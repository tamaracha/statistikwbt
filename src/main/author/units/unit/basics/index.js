import template from './basics.jade';
import controller from './basics-controller';

export default {
  name: 'basics',
  url: '',
  template,
  controller,
  controllerAs: 'basics',
  ncyBreadcrumb: {
    label: '{{unit.unit.title}} — Grunddaten'
  }
};
