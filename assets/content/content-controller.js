"use strict";
module.exports=/*@ngInject*/function(units){
	this.units=_.sortBy(units,"position");
	_.forEach(units,function(unit){console.log(unit.position);});
};