import templateUrl from './remove-modal.html';
export default function(kind, scope){
  return {
    templateUrl,
    controller: ['$scope', function($scope){
      $scope.kind = kind;
    }],
    scope
  };
}