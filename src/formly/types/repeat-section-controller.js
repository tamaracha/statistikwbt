import angular from 'angular';
var unique = 1;
export default function RepeatSectionController($scope){
  $scope.formOptions = {formState: $scope.formState};
  $scope.addNew = addNew;
  
  $scope.copyFields = copyFields;
  
  
  function copyFields(fields) {
    fields = angular.copy(fields);
    addRandomIds(fields);
    return fields;
  }
  
  function addNew() {
    if(!$scope.newText){return;}
    $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
    var repeatsection = $scope.model[$scope.options.key];
    //var lastSection = repeatsection[repeatsection.length - 1];
    var newsection = {text: $scope.newText};
    /*
    if (lastSection) {
      newsection = angular.copy(lastSection);
    }
    */
    repeatsection.push(newsection);
    $scope.newText = '';
  }
  
  function addRandomIds(fields) {
    unique++;
    angular.forEach(fields, function(field, index) {
      if (field.fieldGroup) {
        addRandomIds(field.fieldGroup);
        return; // fieldGroups don't need an ID
      }
      
      if (field.templateOptions && field.templateOptions.fields) {
        addRandomIds(field.templateOptions.fields);
      }
      
      field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
    });
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
RepeatSectionController.$inject = ['$scope'];
