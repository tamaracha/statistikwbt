export default class NewController{
  constructor($scope, $http, $state){
    this.$scope = $scope;
    this.$http = $http;
    this.$state = $state;
    this.topic = {};
  }
  save(){
    return this.$http.post(`api/units/${this.$state.params.unit}/topics`, this.topic)
    .then(
      (res) => {
        this.error = null;
        this.$scope.topics.topics.push(res.data);
        this.$scope.topics.selected = res.data;
        this.$scope.unit.unit.updatedAt = res.headers('x-updated-unit');
        this.$state.go(
          'main.author.units.unit.topics.topic.basics',
          {topic: res.data._id}
        );
      },
      (e) => {
        this.error = e;
      }
    );
  }
}
NewController.$inject = ['$scope', '$http', '$state'];
