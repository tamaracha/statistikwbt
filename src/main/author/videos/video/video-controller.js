import _ from 'lodash';
import removeModal from '../../units/remove-modal';
export default /*@ngInject*/class NewController{
  constructor(video, FileUploader, $localStorage, $scope, $uibModal, $state){
    this.video = video;
    this.$scope = $scope;
    this.uploader = new FileUploader({
      url: `api/videos/${video._id}`,
      method: 'PUT',
      onBeforeUploadItem: (i) => {
        i.headers['Authorization'] = 'bearer '+$localStorage.token;
        return i;
      },
      onSuccessItem: (i,res) => {
        _.assign(this.video, res);
        if($scope.videos.videos.length > 0){
          const index = _.findIndex($scope.videos.videos,{_id: res._id});
          _.assign($scope.videos.videos[index],res);
        }
        return i;
      }
    });
    this.$uibModal = $uibModal;
    this.removeModal = removeModal($scope);
    this.$state = $state;
  }
  remove(){
    return this.$uibModal.open(this.removeModal)
    .result
    .then(() => {
      return this.video.remove();
    })
    .then(() => {
      _.remove(this.$scope.videos.videos,{_id: this.video._id});
      return this.$state.go('.^');
    });
  }
}
