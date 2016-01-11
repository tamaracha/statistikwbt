import _ from 'lodash';
import removeModal from '../../remove-modal';
export default /*@ngInject*/class TopicsCtrl{
  constructor(topics,$state,$scope, $uibModal, $http){
    this.$http = $http;
    this.topics = topics.data;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.removeModal = removeModal($scope);
    this.selected = null;
    this.collapse = false;
    this.init();
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
  }
  init(){
    if(!this.$state.params.topic){return;}
    this.selected = _.find(this.topics,{_id: this.$state.params.topic});
    return this.selected;
  }
  select(){
    if(this.selected){
      this.$state.go(
        'main.author.units.unit.topics.topic.basics',
        {topic: this.selected._id}
      );
    }
    else{
      this.$state.go('main.author.units.unit.topics.new');
    }
  }
  remove(){
    if(!this.selected){return;}
    return this.$uibModal.open(this.removeModal)
    .result
    .then(() => {
      return this.$http.delete(`api/units/${this.$state.params.unit}/topics/${this.selected._id}`);
    })
    .then(
      () => {
        _.remove(this.topics, {_id: this.selected._id});
        this.selected = null;
        this.select();
      },
      (e) => {
        this.error = e;
      }
    );
  }
  move(dir){
    return this.$http.patch(`api/units/${this.$state.params.unit}/topics`,{
      action: 'move',
      dir,
      topic: this.selected._id
    })
    .then((topics) => {
      this.topics = topics.data;
    },
    (e) => {
      this.error = e;
    });
  }
}
