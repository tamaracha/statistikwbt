import template from './main.jade';
import controller from './main-controller.js';
import home from './home';
import contact from './contact';
import software from './software';
import content from './content';
import download from './download';
import register from './register';
import author from './author';

export default {
  name: 'main',
  url: '',
  abstract: true,
  template,
  controller,
  controllerAs: 'main',
  children: [
    home,
    contact,
    software,
    content,
    download,
    register,
    author
  ]
};
