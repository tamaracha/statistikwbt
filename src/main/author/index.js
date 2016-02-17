import templateUrl from './author.html';

import meta from './meta';
import units from './units';
import images from './images';

export default {
  name: 'author',
  url: '/author',
  templateUrl,
  data: {
    permissions: {
      only: ['author']
    }
  },
  children: [
    meta,
    units,
    images
  ]
};
