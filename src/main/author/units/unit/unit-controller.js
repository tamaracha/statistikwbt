import angular from 'angular';
import _ from 'lodash';
import addModal from '../add-modal';
import removeModal from '../remove-modal';
export default class UnitController{
  constructor(jsonpatch,unit,$scope, $http, $state, $uibModal){
    this.unit = unit.data;
    this.lastModified = unit.headers('last-modified');
    this.$http = $http;
    this.jsonpatch = jsonpatch;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.addModal = addModal('topic');
    this.removeModal = removeModal('topic', $scope);
    $scope.units.fields[3].model = this.unit.test;
    $scope.units.fields[4].model = this.unit.test;
    $scope.$watch(angular.bind(this, this.watcher), angular.bind(this, this.update), true);
    this.init();
  }
  init(){
    this.patches = [];
    this.error = null;
    this.step = 1;
    this.index = 0;
    if(!this.$state.params.topic){
      this.selected = this.unit.topics[0];
    }
    else{
      this.selected = _.find(this.unit.topics, {_id: this.$state.params.topic});
    }
  }
  watcher(){
    return _.pick(this.unit, ['_id', 'title', 'status', 'subtitle', 'description', 'requires', 'test']);
  }
  update(val, oldVal){
    this.patches = this.jsonpatch.compare(oldVal,val);
    if(this.patches.length === 0){return;}
    const config = {
      method: 'PATCH',
      url: 'api/units/'+this.unit._id,
      data: this.patches,
      headers: {'if-unmodified-since': this.lastModified}
    };
    return this.$http(config)
    .then(
      (res) => {
        this.patches = [];
        this.lastModified = res.headers('last-modified');
        this.error = null;
      },
      (e) => {
        this.error = e;
      }
    );
  }
  move(dir){
    const index = _.findIndex(this.unit.topics, {_id: this.selected._id});
    let path = (this.step * dir) + index;
    if(path < 0){
      path = path + this.unit.topics.length;
    }
    if(path >= this.unit.topics.length){
      path = path - this.unit.topics.length;
    }
    this.patches = [{
      op: 'move',
      from: '/topics/'+index,
      path: '/topics/'+path
    }];
    const config = {
      method: 'PATCH',
      url: 'api/units/'+this.unit._id,
      data: this.patches,
      headers: {'if-unmodified-since': this.lastModified}
    };
    return this.$http(config)
    .then(
      (res) => {
        this.jsonpatch.apply(this.unit, this.patches);
        this.lastModified = res.headers('last-modified');
        this.patches = [];
      },
      (e) => {
        this.error = e;
      }
    );
  }
  remove(){
    if(!this.selected){return;}
    return this.$uibModal.open(this.removeModal)
    .result
    .then(() => {
      return this.$http.delete(`api/units/${this.unit._id}/topics/${this.selected._id}`);
    })
    .then(
      (res) => {
        _.remove(this.unit.topics, {_id: this.selected._id});
        this.selected = this.unit.topics[0] || null;
        this.lastModified = res.headers('x-updated-unit');
      },
      (e) => {
        this.error = e;
      }
    );
  }
  new(){
    this.$uibModal.open(this.addModal)
    .result
    .then(
      (res) => {
        this.unit.topics.push(res.data);
        this.lastModified = res.headers('x-updated-unit');
        this.selected = res.data;
      },
      (e) => {
        this.error = e;
      }
    );
  }
  static get $inject(){
    return ['jsonpatch', 'unit', '$scope', '$http', '$state', '$uibModal'];
  }
}
