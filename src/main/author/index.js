import template from './author.jade';

import meta from './meta';
import units from './units';
import images from './images';

export default {
  name: 'author',
  url: '/author',
  templateUrl: template,
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
