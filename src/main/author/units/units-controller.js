import _ from 'lodash';
import removeModal from './remove-modal';
export default class UnitsController{
  constructor(units,$scope,$state, $uibModal, $http){
    this.units = units.data;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.removeModal = removeModal('unit', $scope);
    this.$http = $http;
    this.collapse = false;
    this.init();
    this.modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.fields = [{
      key: 'title',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Titel',
        placeholder: 'Titel des Kapitels',
        required: true
      },
      modelOptions: this.modelOptions
    },
    {
      key: 'subtitle',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Kapitels'
      },
      modelOptions: this.modelOptions
    },
    {
      key: 'requires',
      type: 'horizontalMultiCheckbox',
      templateOptions: {
        label: 'Voraussetzungen',
        labelProp: 'title',
        valueProp: '_id'
      },
      modelOptions: this.modelOptions
    },
    {
      key: 'active',
      type: 'horizontalCheckbox',
      templateOptions: {
        label: 'Test für dieses Kapitel aktivieren'
      },
      modelOptions: this.modelOptions
    },
    {
      key: 'shuffle',
      type: 'horizontalMultiCheckbox',
      modelOptions: this.modelOptions,
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
      modelOptions: this.modelOptions,
      templateOptions: {
        label: 'Beschreibung',
        required: true,
        placeholder: 'hier Beschreibungstext eingeben'
      }
    }];
    function watcher(){
      return $scope.units.selected ? _.reject($scope.units.units, {_id: $scope.units.selected._id}) : $scope.units.units;
    }
    $scope.$watchCollection(watcher, (val) => {
      this.fields[2].templateOptions.options = val;
    });
  }
  init(){
    if(this.$state.params.unit){
      this.selected = _.find(this.units,{_id: this.$state.params.unit});
    }
    else{this.selected = null;}
  }
  select(){
    if(this.selected){
      this.$state.go(
        'main.author.units.unit.basics',
        {unit: this.selected._id}
      );
    }
    else{
      this.$state.go('main.author.units.new');
    }
  }
  remove(){
    if(!this.selected){return;}
    return this.$uibModal.open(this.removeModal)
    .result
    .then(() => {
      return this.$http.delete('api/units/'+this.selected._id);
    })
    .then(
      () => {
        _.remove(this.units, {_id: this.selected._id});
        this.selected = null;
        this.select();
      },
      (e) => {
        this.error = e;
      }
    );
  }
}
UnitsController.$inject = ['units', '$scope', '$state', '$uibModal', '$http'];
