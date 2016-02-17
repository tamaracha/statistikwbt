import './subkapitel.css';
import templateUrl from './unit.html';
import controller from './unit-controller.js';
import description from './description';
import test from './test';
import topic from './topic';
//import test from './test';

export default {
  name: 'unit',
  url: '/:unit',
  templateUrl,
  controller,
  controllerAs: 'unit',
  abstract: true,
  resolve: {
    unit: ['$http', '$stateParams', function($http,$stateParams){
      const config = {
        method: 'GET',
        url: 'api/units/'+$stateParams.unit,
        params: {
          projections: 'title subtitle description requires topics._id topics.title test'
        }
      };
      return $http(config);
    }]
  },
  children: [
    description,
    test,
    topic
  ]
};
