import _ from 'lodash';
import removeModal from './remove-modal';
export default /*@ngInject*/class UnitsController{
  constructor(units,$scope,$state, $uibModal){
    this.units = units;
    this.$state = $state;
    this.$uibModal = $uibModal;
    this.removeModal = removeModal($scope);
    this.collapse = false;
    this.init();
  }
  init(){
    if(this.$state.params.unit){
      this.selected = _.find(this.units,{_id: this.$state.params.unit});
    }
  }
  select(){
    if(this.selected){
      this.$state.go(
        'main.author.units.unit.basics',
        {unit: this.selected._id}
      );
    }
    else{
      this.$state.go('main.author.units.new');
    }
  }
  save(newUnit){
    return this.units.post(newUnit)
    .then((unit) => {
      this.units.push(unit);
      this.selected = unit;
      this.select();
    });
  }
  remove(){
    return this.$uibModal.open(this.removeModal)
    .result
    .then(() => {
      return this.selected.remove();
    })
    .then(() => {
      _.remove(this.units,{_id: this.selected._id});
      this.selected = null;
      this.select();
    });
  }
}
