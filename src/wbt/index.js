import templateUrl from './wbt.jade';
import controller from './wbt-controller.js';
import home from './home';
import contact from './contact';
import impressum from './impressum';
import content from './content';
import download from './download';
import register from './register';
import user from './user';
import author from './author';

export default {
  name: 'wbt',
  url: '/:wbt',
  abstract: true,
  templateUrl,
  controller,
  controllerAs: 'wbt',
  children: [
    home,
    contact,
    impressum,
    content,
    download,
    register,
    user,
    author
  ]
};
