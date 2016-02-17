import item from './item';
import templateUrl from './meta.html';
import controller from './meta-controller';

export default {
  name: 'meta',
  url: '/meta',
  templateUrl,
  controller,
  controllerAs: 'meta',
  children: [
    item
  ]
};
