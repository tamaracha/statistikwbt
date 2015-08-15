export default /*@ngInject*/class TopicsCtrl{
  constructor(topics,$state,lodash){
    this.topics = topics;
    this.$state = $state;
    this.lodash = lodash;
    this.selected = null;
    this.collapse = false;
    this.init();
  }
  init(){
    if(this.$state.params.topic){
      this.selected = this.lodash.find(this.topics,{_id: this.$state.params.topic});
    }
  }
  select(){
    if(this.selected){
      this.$state.go(
        'main.author.units.unit.topics.topic.basics',
        {topic: this.selected._id}
      );
    }
    else{
      this.$state.go('main.author.units.topics.topic.new');
    }
  }
  save(newTopic){
    return this.topics.post(newTopic)
    .then((topic) => {
      this.topics.push(topic);
      this.selected = topic;
      this.select();
    });
  }
  remove(){
    if(this.selected){
      return this.selected.remove()
      .then(() => {
        this.lodash.remove(this.topics,{_id: this.selected._id});
        this.selected = null;
        this.select();
      },
      (e) => {
        this.error = e;
      });
    }
  }
  moveUp(){
    return this.topics.patch({
      action: 'move',
      'dir': 'up',
      topic: this.selected._id
    })
    .then((topics) => {
      this.topics = topics;
    },
    (e) => {
      this.error = e;
    });
  }
  moveDown(){
    return this.topics.patch({
      action: 'move',
      'dir': 'down',
      topic: this.selected._id
    })
    .then((topics) => {
      this.topics = topics;
    },
    (e) => {
      this.error = e;
    });
  }
}
