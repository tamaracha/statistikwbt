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
      if(this.patches.length > 0){
        return $http.patch(`api/units/${$stateParams.unit}/topics/${$stateParams.topic}`,this.patches, {headers: {'if-unmodified-since': this.topic.updatedAt}})
        .then(
          (res) => {
            this.patches = [];
            this.error = null;
            const lmh = res.headers('last-modified');
            if(lmh){this.topic.updatedAt = lmh;}
          },
          (e) => {
            this.error = e;
          }
        );
      }
    },true);
  }
}
