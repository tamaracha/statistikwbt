export default /*@ngInject*/class NewController{
  constructor($scope){
    this.unit = {test: {}};
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
      key: 'test.active',
      type: 'horizontalCheckbox',
      templateOptions: {
        label: 'Test für dieses Kapitel aktivieren'
      }
    },
    {
      key: 'test.shuffle',
      type: 'horizontalMultiCheckbox',
      templateOptions: {
        label: 'Zufällige Reihenfolge',
        options: [
          {
            name: 'Aufgaben',
            value: 'items'
          },
          {
            name: 'Antwortoptionen bei Wahlaufgaben',
            value: 'choices'
          }
        ]
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
