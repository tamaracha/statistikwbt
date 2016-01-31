import templateUrl from './home.jade';
export default {
  name: 'home',
  url: '/home',
  templateUrl,
  controller: 'MetaController as home',
  resolve: {
    meta: ['api', function(api){
      return api.getMetaBy_id({_id: 'home'});
    }]
  }
};
