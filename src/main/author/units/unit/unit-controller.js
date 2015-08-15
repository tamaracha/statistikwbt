export default /*@ngInject*/class UnitCtrl{
  constructor(jsonpatch,unit,$scope){
    this.unit = unit.plain();
    this.patches = [];
    this.error = null;
    $scope.$watch('unit.unit',(val,oldVal) => {
      this.patches = jsonpatch.compare(oldVal,val);
      if(this.patches.length === 0){
        return;
      }
      return unit.patch(this.patches)
      .then(() => {
        this.patches = [];
        this.error = null;
      },(e) => {
        this.error = e;
        this.recover = oldVal;
      });
    },true);
  }
}
