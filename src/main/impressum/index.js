import templateUrl from './impressum.jade';
export default {
  name: 'impressum',
  url: '/impressum',
  templateUrl,
  controller: 'MetaController as impressum',
  resolve: {
    meta: ['api', function(api){
      return api.getMetaBy_id({_id: 'impressum'});
    }]
  }
};
