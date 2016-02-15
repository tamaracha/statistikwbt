import templateUrl from './topic.jade';
import controller from './topic-controller.js';
export default {
  name: 'topic',
  url: '/:topic',
  templateUrl,
  controller,
  controllerAs: 'topic',
  resolve: {
    topic: ['$http', '$stateParams', function($http,$stateParams){
      return $http.get(`api/units/${$stateParams.unit}/topics/${$stateParams.topic}`);
    }]
  }
};
