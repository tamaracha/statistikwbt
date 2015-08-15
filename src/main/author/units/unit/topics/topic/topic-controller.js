export default /*@ngInject*/class TopicCtrl{
  constructor($scope,jsonpatch,topic){
    const modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 500,
        blur: 0
      }
    };
    this.topic = topic.plain();
    this.patches = [];
    this.error = null;
    this.topicFields = [{
      key: '_id',
      type: 'horizontalStatic',
      templateOptions: {
        label: 'ID'
      }
    },
    {
      key: 'title',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        required: true,
        label: 'Titel',
        placeholder: 'Titel des Subkapitels'
      },
      modelOptions
    },
    {
      key: 'subtitle',
      type: 'horizontalInput',
      templateOptions: {
        type: 'text',
        label: 'Untertitel',
        placeholder: 'Untertitel des Subkapitels'
      },
      modelOptions
    },
    {
      key: 'body',
      type: 'horizontalMarkdownArea',
      templateOptions: {
        required: true,
        label: 'Text',
        placeholder: 'Hier Text des Subkapitels eingeben'
      },
      modelOptions
    }];
    $scope.$watch('topic.topic',(val,oldVal) => {
      this.patches = jsonpatch.compare(oldVal,val);
      if(this.patches.length > 0){
        return topic.patch(this.patches)
        .then(() => {
          this.patches = [];
          this.error = null;
        },(e) => {
          this.error = e;
          this.recover = oldVal;
        });
      }
    },true);
  }
}
