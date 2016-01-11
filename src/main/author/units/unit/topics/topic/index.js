import template from './topic.jade';
import controller from './topic-controller.js';
import basics from './basics';
import examples from './examples';
import extras from './extras';
export default {
  name: 'topic',
  url: '/:topic',
  templateUrl: template,
  controller,
  controllerAs: 'topic',
  abstract: true,
  resolve: {
    topic: /*@ngInject*/function($http,$stateParams){
      return $http.get(`api/units/${$stateParams.unit}/topics/${$stateParams.topic}`);
    }
  },
  children: [
    basics,
    examples,
    extras
  ]
};
