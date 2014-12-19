"use strict";
module.exports=/*@ngInject*/function(Units,titleCaseFilter,unitService){
  var self,setRequires,updateRequires,saveRequires;
  self=this;
  setRequires=_.bind(unitService.setRequires,this);
  updateRequires=_.bind(unitService.updateRequires,this);
  saveRequires=_.bind(unitService.saveRequires,this);
  this.status={};
  this.status.requires=[];
  this.status.origTitle="";
  this.find=function(){
    Units.getList()
    .then(function(result){
      self.units=result;
    })
    .then(setRequires)
  };
  this.find();
  this.resetForm=function(){
    self.unit={};
  };
  this.resetForm();

  this.create=function(){
    Units.post(self.unit)
    .then(function(result){
      self.unit=result;
      self.units.push(result);
    });
  };
  this.findOne=function(id){
    Units.one(id).get()
    .then(function(unit){
      self.unit=unit;
      self.status.origTitle=unit.title;
    })
    .then(updateRequires);
  };
  this.update=function(){
    self.unit.put()
    .then(function(unit){
    self.status.origTitle=unit.title;
    _.find(self.units,{_id: unit._id}).title=unit.title;
    });
  };
  this.remove=function(id){
    Units.one(id).remove()
    .then(function(){
      _.remove(self.units,{_id: id});
    });
  };
  this.submit=function(){
    saveRequires();
    self.unit._id ? self.update() : self.create();
  };
  this.setTopic=function(id){
    self.topic=_.find(self.unit.topics,{_id: id});
  };
  this.removeTopic=function(id){
    _.remove(self.unit.topics,{_id: id});
  };
  this.addTopic=function(){
    self.topic={};
  };
  this.saveTopic=function(){
    
  };
};