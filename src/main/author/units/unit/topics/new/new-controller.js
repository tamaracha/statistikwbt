export default /*@ngInject*/class NewController{
  constructor(){
    this.topic = {};
    this.fields = [{
      key: 'title',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'titel',
        required: true,
        placeholder: 'Titel des Subkapitels'
      }
    },
    {
      key: 'subtitle',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Subkapitels'
      }
    },
    {
      key: 'body',
      type: 'horizontalMarkdownArea',
      templateOptions: {
        label: 'Text',
        required: true,
        placeholder: 'hier Text des Subkapitels eingeben'
      }
    }];
  }
}
