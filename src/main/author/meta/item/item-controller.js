import _ from 'lodash';
export default /*@ngInject*/class ItemController{
  constructor(item, $scope, jsonpatch){
    this.item = item.plain();
    this.patches = [];
    this.error = null;
    this.fields = [
      {
        type: 'horizontalInput',
        key: 'title',
        templateOptions: {
          label: 'Titel',
          type: 'text',
          placeholder: 'Titel dieser Metaseite'
        }
      },
      {
        key: 'menu',
        type: 'horizontalInput',
        templateOptions: {
          label: 'Menüeintrag',
          type: 'text',
          placeholder: 'Name des Navigationslinks'
        }
      },
      {
        key: 'icon',
        type: 'horizontalInput',
        templateOptions: {
          label: 'Menü-Icon'
        }
      },
      {
        key: 'active',
        type: 'horizontalCheckbox',
        templateOptions: {
          label: 'Im Menü anzeigen'
        }
      },
      {
        key: 'body',
        type: 'horizontalMarkdownArea',
        hide: _.includes(['content','download','author'],this.item._id),
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
      return item.patch(this.patches)
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
