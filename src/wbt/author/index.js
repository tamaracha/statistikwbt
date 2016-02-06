import template from './author.jade';
import pages from './pages';
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
    pages,
    units,
    images
  ]
};
