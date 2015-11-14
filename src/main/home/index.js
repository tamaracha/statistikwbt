import templateUrl from './home.jade';
export default {
  name: 'home',
  url: '/home',
  templateUrl,
  controller: /*@ngInject*/function(meta){
    this.meta = meta;
  },
  controllerAs: 'home',
  resolve: {
    meta: /*@ngInject*/function(Restangular){
      return Restangular.one('meta','home').get();
    }
  }
};
