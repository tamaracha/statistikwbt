(function(){
"use strict";
angular.module("ui")
.filter("title",function(){
	return function(unit){
		if(!unit.title){return;}
		if(unit.subtitle){return unit.title+": "+unit.subtitle;}
		return unit.title;
	};
});
}());
