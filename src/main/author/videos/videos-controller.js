export default /*@ngInject*/class ImagesController{
  constructor($scope, FileUploader, api, $localStorage){
    this.api = api;
    this.searchTerms = {};
    this.uploader = new FileUploader({
      url: 'api/videos',
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
    $scope.$watchCollection('videos.searchTerms',(val,oldVal) => {
      if(val === oldVal){return;}
      this.search();
    });
  }
  search(){
    return this.api.getVideos(this.searchTerms)
    .then((data) => {
      this.videos = data;
      console.log(data);
      return data;
    });
  }
}
