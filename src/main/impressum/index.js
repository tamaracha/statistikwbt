import templateUrl from './impressum.jade';
export default {
  name: 'impressum',
  url: '/impressum',
  templateUrl,
  controller: /*@ngInject*/function(meta){
    this.meta = meta;
  },
  controllerAs: 'impressum',
  resolve: {
    meta: /*@ngInject*/function(api){
      return api.getMetaBy_id({_id: 'impressum'});
    }
  }
};
