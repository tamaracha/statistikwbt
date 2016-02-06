import template from './topics.jade';
import controller from './topics-controller';
import newTopic from './new';
import topic from './topic';
export default {
  name: 'topics',
  url: '/topics',
  templateUrl: template,
  controller,
  controllerAs: 'topics',
  abstract: true,
  resolve: {
    topics: ['$http', '$stateParams', function($http, $stateParams){
      const config = {
        method: 'GET',
        url: 'api/units/'+$stateParams.unit+'/topics',
        params: {projections: 'topics.title topics._id'}
      };
      return $http(config);
    }]
  },
  children: [
    newTopic,
    topic
  ]
};
