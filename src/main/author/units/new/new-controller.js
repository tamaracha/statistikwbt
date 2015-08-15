export default /*@ngInject*/class NewController{
  constructor($scope){
    this.unit = {};
    this.fields = [{
      key: 'title',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Titel',
        placeholder: 'Titel des Kapitels',
        required: true
      }
    },
    {
      key: 'subtitle',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Kapitels'
      }
    },
    {
      key: 'requires',
      type: 'horizontalMultiCheckbox',
      templateOptions: {
        label: 'Voraussetzungen',
        labelProp: 'title',
        valueProp: '_id'
      }
    },
    {
      key: 'description',
      type: 'horizontalMarkdownArea',
      templateOptions: {
        label: 'Beschreibung',
        required: true,
        placeholder: 'hier Beschreibungstext eingeben'
      }
    }];
    $scope.$watchCollection('units.units',(val) => {
      this.fields[2].templateOptions.options = val;
    },true);
  }
}
