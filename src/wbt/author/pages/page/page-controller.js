import _ from 'lodash';
export default class PageController{
  constructor(page, $scope, jsonpatch, $http){
    const modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.data = page.data;
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
        hide: _.includes(['download','author'],this.data._id),
        modelOptions,
        templateOptions: {
          label: 'Inhalt'
        }
      }
    ];
    $scope.$watch('page.data',(val,oldVal) => {
      this.patches = jsonpatch.compare(oldVal, val);
      if(this.patches.length === 0){return;}
      return $http.patch('api/pages/'+this.data._id, this.patches)
      .then(
        () => {
          this.patches = [];
          const index = _.findIndex($scope.wbt.pages,{_id: val._id});
          $scope.wbt.pages[index] = val;
          $scope.pages[val._id] = val;
        },
        (e) => {
          this.error = e;
        }
      );
    },true);
  }
}
PageController.$inject = ['page', '$scope', 'jsonpatch', '$http'];
