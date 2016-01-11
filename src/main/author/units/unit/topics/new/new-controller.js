export default /*@ngInject*/class NewController{
  constructor($scope, $http, $state){
    this.$scope = $scope;
    this.$http = $http;
    this.$state = $state;
    this.topic = {};
  }
  save(){
    return this.$http.post(`api/units/${this.$state.params.unit}/topics`, this.topic)
    .then(
      (topic) => {
        this.$scope.topics.topics.push(topic.data);
        this.$scope.topics.selected = topic.data;
        this.$state.go(
          'main.author.units.unit.topics.topic.basics',
          {topic: topic.data._id}
        );
        this.error = null;
      },
      (e) => {
        this.error = e;
      }
    );
  }
}
