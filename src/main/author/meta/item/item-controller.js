import _ from 'lodash';
export default /*@ngInject*/class ItemController{
  constructor(item, $scope, jsonpatch, api){
    const modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.item = item;
    this.patches = [];
    this.error = null;
    this.fields = [
      {
        type: 'horizontalInput',
        key: 'title',
        modelOptions,
        templateOptions: {
          label: 'Titel',
          type: 'text',
          placeholder: 'Titel dieser Metaseite'
        }
      },
      {
        key: 'menu',
        type: 'horizontalInput',
        modelOptions,
        templateOptions: {
          label: 'Menüeintrag',
          type: 'text',
          placeholder: 'Name des Navigationslinks'
        }
      },
      {
        key: 'icon',
        type: 'horizontalInput',
        modelOptions,
        templateOptions: {
          label: 'Menü-Icon'
        }
      },
      {
        key: 'active',
        type: 'horizontalCheckbox',
        modelOptions,
        templateOptions: {
          label: 'Im Menü anzeigen'
        }
      },
      {
        key: 'body',
        type: 'horizontalMarkdownArea',
        hide: _.includes(['download','author'],this.item._id),
        modelOptions,
        templateOptions: {
          label: 'Inhalt'
        }
      }
    ];
    $scope.$watch('item.item',(val,oldVal) => {
      this.patches = jsonpatch.compare(oldVal, val);
      if(this.patches.length === 0){
        return;
      }
      return api.patchMetaBy_id({
        _id: item._id,
        patches: this.patches
      })
      .then(
        () => {
          this.patches = [];
          const index = _.findIndex($scope.main.meta,{_id: val._id});
          $scope.main.meta[index] = val;
          $scope.main.items[val._id] = val;
        },
        (e) => {
          this.error = e;
        }
      );
    },true);
  }
}
