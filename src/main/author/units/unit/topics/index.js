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
    topics: /*@ngInject*/function($http, $stateParams){
      const query = {projections: 'topics.title topics._id'};
      return $http.get('api/units/'+$stateParams.unit+'/topics', query);
    }
  },
  children: [
    newTopic,
    topic
  ]
};
