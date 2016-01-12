export default /*@ngInject*/class ImagesController{
  constructor($scope, FileUploader, $http, $localStorage){
    this.$http = $http;
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
    $scope.$watchCollection('images.searchTerms',(val) => {
      this.search(val);
    });
  }
  search(val){
    const config = {
      method: 'GET',
      url: 'api/images',
      params: val
    };
    return this.$http(config)
    .then((res) => {
      this.images = res.data;
      return res;
    });
  }
}
