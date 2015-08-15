export default /*@ngInject*/class akzeptanzCtrl{
  constructor($modalInstance,unit,summary,Restangular){
    this.$modalInstance = $modalInstance;
    this.unit = unit;
    this.summary = summary;
    this.Comments = Restangular.all('comments');
    this.labels = [
      'keine Antwort',
      'stimme nicht zu',
      'stimme weniger zu',
      'stimme teilweise zu',
      'stimme eher zu',
      'stimme zu'
    ];
  }
  ok(){
    return this.Comments.post({
      unit: this.unit._id,
      value: this.summary.comment
    })
    .then(this.$modalInstance.close);
  }
  cancel(){
    return this.$modalInstance.dismiss('cancel');
  }
}
