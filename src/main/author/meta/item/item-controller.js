import _ from 'lodash';
export default class ItemController{
  constructor(item, $scope, jsonpatch, $http){
    const modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.item = item.data;
    //this.lastModified = item.headers('last-modified');
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
      const config = {
        method: 'PATCH',
        url: 'api/meta/'+this.item._id,
        //headers: {'if-unmodified-since': this.lastModified},
        data: this.patches
      };
      return $http(config)
      .then(
        (res) => {
          this.patches = [];
          //this.lastModified = res.headers('last-modified');
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
  static get $inject(){
    return ['item', '$scope', 'jsonpatch', '$http'];
  }
}
