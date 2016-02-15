import _ from 'lodash';
export default class UnitCtrl{
  constructor(unit,units){
    this.unit = unit.data;
    this.units = units.data;
  }
  get requires(){
    return _.filter(this.units, _.bind(function callback(u){
      return _.includes(this.unit.requires, u._id);
    }, this));
  }
}
UnitCtrl.$inject = ['unit', 'units'];
