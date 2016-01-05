import _ from 'lodash';
export default /*@ngInject*/class BasicsController{
  constructor($scope,unit){
    const modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.fields = [{
      key: 'title',
      type: 'horizontalInput',
      modelOptions,
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
      modelOptions,
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Kapitels'
      }
    },
    {
      key: 'requires',
      type: 'horizontalMultiCheckbox',
      modelOptions,
      templateOptions: {
        label: 'Voraussetzungen',
        valueProp: '_id',
        labelProp: 'title'
      }
    },
    {
      key: 'active',
      model: $scope.unit.unit.test,
      type: 'horizontalCheckbox',
      modelOptions,
      templateOptions: {
        label: 'Test für dieses Kapitel aktivieren'
      }
    },
    {
      key: 'shuffle',
      model: $scope.unit.unit.test,
      type: 'horizontalMultiCheckbox',
      modelOptions,
      templateOptions: {
        label: 'Zufällige Reihenfolge',
        valueProp: 'value',
        labelProp: 'name',
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
      modelOptions,
      templateOptions: {
        label: 'Beschreibung',
        required: true,
        placeholder: 'Beschreibungstext'
      }
    }];
    $scope.$watchCollection('units.units',(val) => {
      this.fields[2].templateOptions.options = _.reject(val,{_id: unit._id});
    },true);
  }
}
