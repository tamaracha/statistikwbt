import template from './image.jade';
import controller from './image-controller';
export default {
  name: 'image',
  url: '/:image',
  templateUrl: template,
  controller,
  controllerAs: 'image',
  resolve: {
    image: ['$http', '$stateParams', function($http, $stateParams){
      const config = {
        method: 'GET',
        url: 'api/images/'+$stateParams.image,
        params: {metadata: true}
      };
      return $http(config);
    }]
  }
};
