export default /*@ngInject*/class NewController{
  constructor($scope){
    this.onSuccess = function(res){
      $scope.images.images.push(res.data);
    };
  }
}
