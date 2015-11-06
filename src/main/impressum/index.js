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
    meta: /*@ngInject*/function(Restangular){
      return Restangular.one('meta','impressum').get();
    }
  }
};
