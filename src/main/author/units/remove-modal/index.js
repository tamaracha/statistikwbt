import templateUrl from './remove-modal.jade';
export default function(kind, scope){
  return {
    templateUrl,
    controller: ['$scope', function($scope){
      $scope.kind = kind;
    }],
    scope
  };
}