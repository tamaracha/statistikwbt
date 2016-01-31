import template from './contact.jade';
export default {
  name: 'contact',
  url: '/contact',
  templateUrl: template,
  controller: 'MetaController as contact',
  resolve: {
    meta: ['api', function(api){
      return api.getMetaBy_id({_id: 'contact'});
    }]
  }
};
