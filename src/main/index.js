import templateUrl from './main.html';
import controller from './main-controller.js';
import home from './home';
import contact from './contact';
import impressum from './impressum';
import content from './content';
import download from './download';
import register from './register';
import user from './user';
import author from './author';

export default {
  name: 'main',
  url: '',
  abstract: true,
  templateUrl,
  controller,
  controllerAs: 'main',
  resolve: {
    meta: ['$http', function($http){
      return $http.get('api/meta');
    }]
  },
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
