import template from './register.jade';
import controller from './register-controller.js';

export default {
  name: 'register',
  url: '/register',
  templateUrl: template,
  controller,
  controllerAs: 'register'
};
