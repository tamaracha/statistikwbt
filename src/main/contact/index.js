import template from './contact.jade';
export default {
  name: 'contact',
  url: '/contact',
  templateUrl: template,
  controller: /*@ngInject*/function(meta){
    this.meta = meta;
  },
  controllerAs: 'contact',
  resolve: {
    meta: /*@ngInject*/function(Restangular){
      return Restangular.one('meta','contact').get();
    }
  }
};
