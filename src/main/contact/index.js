import templateUrl from './contact.html';
export default {
  name: 'contact',
  url: '/contact',
  templateUrl,
  controller: 'MetaController as contact',
  resolve: {
    meta: ['api', function(api){
      return api.getMetaBy_id({_id: 'contact'});
    }]
  }
};
