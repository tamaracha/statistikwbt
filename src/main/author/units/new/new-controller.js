export default class NewController{
  constructor($scope, $http){
    this.$scope = $scope;
    this.$http = $http;
    this.unit = {test: {}};
    $scope.units.fields[3].model = this.unit.test;
    $scope.units.fields[4].model = this.unit.test;
  }
  save(){
    return this.$http.post('api/units', this.unit)
    .then(
      (res) => {
        this.$scope.units.units.push(res.data);
        this.$scope.units.selected = res.data;
        this.$scope.units.select();
      },
      (e) => {
        this.error = e;
      }
    );
  }
}
NewController.$inject = ['$scope', '$http'];
