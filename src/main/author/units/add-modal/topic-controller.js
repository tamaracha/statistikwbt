export default class NewController{
  constructor($http, $uibModalInstance, $state){
    this.$http = $http;
    this.$uibModalInstance = $uibModalInstance;
    this.$state = $state;
    this.data = {};
    this.fields = [{
      key: 'title',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        required: true,
        label: 'Titel',
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
        required: true,
        label: 'Text',
        placeholder: 'Hier Text des Subkapitels eingeben'
      }
    }];
  }
  save(){
    return this.$http.post(`api/units/${this.$state.params.unit}/topics`, this.data)
    .then(
      (res) => this.$uibModalInstance.close(res)
    );
  }
  static get $inject(){
    return ['$http', '$uibModalInstance', '$state'];
  }
}
