module.exports=/*@ngInject*/function(Units){
this.setRequires=function(){
  this.status.requires=_.map(this.units,function(unit){
    return _.pick(unit,"_id","title");
  });
};

this.updateRequires=function(){
  this.status.requires=_.chain(this.units)
  .reject({title: this.unit.title})
  .map(function(unit){
    var temp=_.pick(unit,"_id","title")
    temp.checked=_.contains(this.unit.requires,unit._id);
    return temp;
  },this)
  .value();
};

this.saveRequires=function(){
  this.unit.requires=_.chain(this.status.requires)
  .filter("checked")
  .map("_id")
  .value();
};

return this;
};