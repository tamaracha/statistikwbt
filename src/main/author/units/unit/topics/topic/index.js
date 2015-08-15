import template from './topic.jade';
import controller from './topic-controller.js';
import basics from './basics';
import examples from './examples';
import extras from './extras';
export default {
  name: 'topic',
  url: '/:topic',
  template,
  controller,
  controllerAs: 'topic',
  abstract: true,
  resolve: {
    topic: /*@ngInject*/function(Restangular,$stateParams){
      return Restangular.one('units',$stateParams.unit).one('topics',$stateParams.topic).get();
    }
  },
  children: [
    basics,
    examples,
    extras
  ]
};
