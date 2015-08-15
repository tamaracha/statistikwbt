import template from './topic.jade';
import controller from './topic-controller.js';

export default {
  name: 'topic',
  url: '/:topic',
  template,
  controller,
  controllerAs: 'topic',
  resolve: {
    topic: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.one('units',$stateParams.unit).one('topics',$stateParams.topic).get();
    }
  }
};
