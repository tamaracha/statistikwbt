import _ from 'lodash';
import removeModal from '../../units/remove-modal';
export default class NewController{
  constructor(image, FileUploader, $localStorage, $scope, $uibModal, $state, $http){
    this.image = image.data;
    this.$scope = $scope;
    this.$http = $http;
    this.uploader = new FileUploader({
      url: `api/images/${image._id}`,
      method: 'PUT',
      onBeforeUploadItem: (i) => {
        i.headers['Authorization'] = 'bearer '+$localStorage.token;
        return i;
      },
      onSuccessItem: (i,res) => {
        _.assign(this.image, res);
        if($scope.images.images.length > 0){
          const index = _.findIndex($scope.images.images,{_id: res._id});
          _.assign($scope.images.images[index],res);
        }
        return i;
      }
    });
    this.mdfig = `![Alt-Text](api/images/${this.image._id})`;
    this.$uibModal = $uibModal;
    this.removeModal = removeModal($scope);
    this.$state = $state;
  }
  remove(){
    return this.$uibModal.open(this.removeModal)
    .result
    .then(() => {
      return this.$http.delete('api/images/'+this.image._id);
    })
    .then(() => {
      _.remove(this.$scope.images.images,{_id: this.image._id});
      return this.$state.go('.^');
    });
  }
}
NewController.$inject = ['image', 'FileUploader', '$localStorage', '$scope', '$uibModal', '$state', '$http'];
