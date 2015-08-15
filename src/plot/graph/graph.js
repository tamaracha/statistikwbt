import _ from 'lodash';
import angular from 'angular';
/*@ngInject*/class GraphCtrl{
  constructor($http,opencpu){
    this.$http = $http;
    this.opencpu = opencpu;
    this.data = {};
    this.renderer = 'svg';
    this.getSpecFields()
    .then(() => {
      return this.getData();
    });
  }
  getData(){
    return this.$http(this.source)
    .then((data) => {
      this.data = angular.fromJson(data);
    },
    (e) => {
      this.error = e;
    });
  }
  getSpecFields(){
    return this.$http.get('api/vega/' + this.value)
    .success((data) => {
      this.fields = data.fields;
      this.spec = data.spec;
      this.source = data.source;
    })
    .error((e) => {
      this.error = e;
    });
  }
}

export default /*@ngInject*/function(){
  function link(scope){
    const clean = scope.$watchCollection('graph.source.params',function(val){
      if(_.size(val) > 0){
        scope.graph.getData();
      }
    });
    scope.$on('$destroy',clean);
  }
  return {
    restrict: 'A',
    scope: {
      value: '@graph'
    },
    controller: GraphCtrl,
    controllerAs: 'graph',
    bindToController: true,
    template: require('./graph.jade'),
    link
  };
}
