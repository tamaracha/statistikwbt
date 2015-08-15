import './subkapitel.css';
import template from './unit.jade';
import controller from './unit-controller.js';
import description from './description';
import test from './test';
import topic from './topic';
//import test from './test';

export default {
  name: 'unit',
  url: '/:unit',
  template,
  controller,
  controllerAs: 'unit',
  abstract: true,
  resolve: {
    unit: /*@ngInject*/function(Restangular,$stateParams){
      const query = {
        projections: 'title subtitle description requires topics._id topics.title'
      };
      return Restangular.one('units',$stateParams.unit).get(query);
    }
  },
  children: [
    description,
    test,
    topic
  ]
};
