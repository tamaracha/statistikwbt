(function(){
"use strict";
angular.module("ui")
.filter("unitStatus",function(){
	return function(id,user,units){
		var unit,deps;
		if(!id){return;}
		if(!user){user={};}
		// User hat Einheit erledigt
		if(user.done&&_.contains(user.done,id)){
			return "done";
		}
		// User hat Einheit nicht erledigt
		if(!units){
			return "ready";
		}
		// Einheit heraussuchen
		unit=_.find(units,{_id: id});
		if(!unit){
			return;
		}
		// Einheit hat keine Abhängigkeiten
		if(!unit.requires||unit.requires.length===0){
			return "ready";
		}
		// User hat nichts erledigt und es gibt Abhängigkeiten
		if(!user.done||user.done.length===0){
			return "unready";
		}
		// Abhängigkeiten, die User nicht erledigt hat
		deps=_.difference(unit.requires,user.done);
		// keine unerledigten Abhängigkeiten
		if(deps.length===0){
			return "ready";
		}
		// unerledigte Abhängigkeiten
		return "unready";
	};
});
}());