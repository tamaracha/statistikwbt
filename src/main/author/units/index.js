import template from './units.jade';
import controller from './units-controller.js';
import newUnit from './new';
import unit from './unit';

export default {
  name: 'units',
  url: '/units',
  template,
  controller,
  controllerAs: 'units',
  abstract: true,
  resolve: {
    units: /*@ngInject*/function(Restangular){
      const query = {
        projections: 'title',
        options: {sort: 'position'}
      };
      return Restangular.all('units').getList(query);
    }
  },
  children: [
    newUnit,
    unit
  ]
};
