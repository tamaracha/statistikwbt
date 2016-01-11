import template from './units.jade';
import controller from './units-controller.js';
import newUnit from './new';
import unit from './unit';

export default {
  name: 'units',
  url: '/units',
  templateUrl: template,
  controller,
  controllerAs: 'units',
  abstract: true,
  resolve: {
    units: /*@ngInject*/function($http){
      const query = {
        projections: 'title',
        options: {sort: 'position'}
      };
      return $http.get('api/units', query);
    }
  },
  children: [
    newUnit,
    unit
  ]
};
