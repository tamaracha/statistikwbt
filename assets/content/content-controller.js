"use strict";
module.exports=/*@ngInject*/function(units){
	this.units=_.sortBy(units,"requires");
};