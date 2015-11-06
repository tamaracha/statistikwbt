import item from './item';
import templateUrl from './meta.jade';
import controller from './meta-controller';

export default {
  name: 'meta',
  url: '/meta',
  templateUrl,
  controller,
  controllerAs: 'meta',
  ncyBreadcrumb: {
    label: 'Meta'
  },
  children: [
    item
  ]
};
