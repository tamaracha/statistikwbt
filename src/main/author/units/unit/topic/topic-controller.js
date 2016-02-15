import _ from 'lodash';
export default class TopicController{
  constructor($scope,jsonpatch,topic, $http, $stateParams){
    this.topic = topic.data;
    this.patches = [];
    this.error = null;
    this.lastModified = topic.headers('last-modified');
    this.fields = [{
      key: 'title',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        required: true,
        label: 'Titel',
        placeholder: 'Titel des Subkapitels'
      },
      modelOptions: $scope.units.modelOptions
    },
    {
      key: 'subtitle',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Subkapitels'
      },
      modelOptions: $scope.units.modelOptions
    },
    {
      key: 'body',
      type: 'horizontalMarkdownArea',
      templateOptions: {
        required: true,
        label: 'Text',
        placeholder: 'Hier Text des Subkapitels eingeben'
      },
      modelOptions: $scope.units.modelOptions
    }];
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
        headers: {'if-unmodified-since': this.lastModified}
      };
      return $http(config)
      .then(
        (res) => {
          this.patches = [];
          this.error = null;
          this.lastModified = res.headers('last-modified');
          $scope.unit.lastModified = res.headers('x-updated-unit');
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
  static get $inject(){
    return ['$scope', 'jsonpatch', 'topic', '$http', '$stateParams'];
  }
}
