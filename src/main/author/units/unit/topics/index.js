import template from './topics.jade';
import controller from './topics-controller';
import newTopic from './new';
import topic from './topic';
export default {
  name: 'topics',
  url: '/topics',
  template,
  controller,
  controllerAs: 'topics',
  abstract: true,
  resolve: {
    topics: /*@ngInject*/function(Restangular,$stateParams){
      const query = {projections: 'topics.title topics._id'};
      return Restangular.one('units',$stateParams.unit).all('topics').getList(query);
    }
  },
  children: [
    newTopic,
    topic
  ]
};
