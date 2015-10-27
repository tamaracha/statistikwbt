export default /*@ngInject*/class ImagesController{
  constructor($scope, FileUploader, Restangular, $localStorage){
    this.images = Restangular.all('images');
    this.searchTerms = {};
    this.uploader = new FileUploader({
      url: 'api/images',
      onBeforeUploadItem: (i) => {
        i.headers['Authorization'] = 'bearer '+$localStorage.token;
        return i;
      }
    });
    this.fields = [
      {
        type: 'horizontalInput',
        key: 'search',
        templateOptions: {
          label: 'Suche',
          type: 'search'
        },
        modelOptions: {
          updateOn: 'default blur',
          debounce: {
            default: 300,
            blur: 0
          }
        }
      },
      {
        type: 'horizontalCheckbox',
        key: 'me',
        templateOptions: {
          label: 'Nur von mir hochgeladen'
        }
      }
    ];
    $scope.$watchCollection('images.searchTerms',(val,oldVal) => {
      if(val === oldVal){return;}
      this.search();
    });
  }
  search(){
    return this.images.getList(this.searchTerms)
    .then((data) => {
      this.images = data;
      return data;
    });
  }
}
