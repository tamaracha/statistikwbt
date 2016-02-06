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
  templateUrl: template,
  controller,
  controllerAs: 'unit',
  abstract: true,
  resolve: {
    unit: ['api', '$stateParams', function(api,$stateParams){
      const query = {
        projections: 'title subtitle description requires topics._id topics.title test',
        _id: $stateParams.unit
      };
      return api.getUnitsBy_id(query);
    }]
  },
  children: [
    description,
    test,
    topic
  ]
};
