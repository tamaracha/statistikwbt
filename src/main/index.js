import template from './main.jade';
import controller from './main-controller.js';
import home from './home';
import contact from './contact';
import impressum from './impressum';
import content from './content';
import download from './download';
import register from './register';
import author from './author';

export default {
  name: 'main',
  url: '',
  abstract: true,
  templateUrl: template,
  controller,
  controllerAs: 'main',
  resolve: {
    meta: /*@ngInject*/function(api){
      return api.getMeta();
    }
  },
  children: [
    home,
    contact,
    impressum,
    content,
    download,
    register,
    author
  ]
};
