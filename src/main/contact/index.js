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
    meta: /*@ngInject*/function(api){
      return api.getMetaBy_id({_id: 'contact'});
    }
  }
};
