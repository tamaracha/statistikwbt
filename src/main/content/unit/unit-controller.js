const _ = require('lodash');
export default /*@ngInject*/class UnitCtrl{
  constructor(unit,units){
    this.unit = unit;
    this.units = units;
  }
  get requires(){
    return _.transform(this.unit.requires,function(result,r){
      const unit = _.find(this.units,{_id: r});
      if(unit){
        result.push(unit);
      }
    },[],this);
  }
}
