import angular from 'angular';
import objectid from 'objectid-browser';
export default function repeatSectionController($scope){
  function copyFields(fields) {
    return angular.copy(fields);
  }
  function addNew() {
    $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
    const repeatsection = $scope.model[$scope.options.key];
    //let lastSection = repeatsection[repeatsection.length - 1];
    const newsection = {_id: objectid()};
    repeatsection.push(newsection);
  }
  $scope.formOptions = {formState: $scope.formState};
  $scope.addNew = addNew;
  $scope.copyFields = copyFields;
}
repeatSectionController.$inject = ['$scope'];
