import _ from 'lodash';
export default /*@ngInject*/class TopicController{
  constructor($scope,jsonpatch,topic, $http, $stateParams){
    this.topic = topic.data;
    this.patches = [];
    this.error = null;
    function watcher(){
      return _.omit($scope.topic.topic, 'updatedAt');
    }
    $scope.$watch(watcher,(val,oldVal) => {
      this.patches = jsonpatch.compare(oldVal,val);
      if(this.patches.length === 0){return;}
      const config = {
        method: 'PATCH',
        url: `api/units/${$stateParams.unit}/topics/${$stateParams.topic}`,
        data: this.patches,
        headers: {'if-unmodified-since': this.topic.updatedAt}
      };
      return $http(config)
      .then(
        (res) => {
          this.patches = [];
          this.error = null;
          this.topic.updatedAt = res.headers('last-modified');
          $scope.unit.unit.updatedAt = res.headers('x-updated-unit');
        },
        (e) => {
          this.error = e;
        }
      );
    },true);
    $scope.$on('topic moved', (ev, args) => {
      this.topic.updatedAt = args.updatedAt;
    });
  }
}
