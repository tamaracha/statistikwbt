import _ from 'lodash';
export default /*@ngInject*/class UnitsController{
  constructor(units,$state){
    this.units = units;
    this.$state = $state;
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
    return this.selected.remove()
    .then(() => {
      _.remove(this.units,{_id: this.selected._id});
      this.selected = null;
      this.select();
    });
  }
}
