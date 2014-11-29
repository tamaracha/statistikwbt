var find=function(req,res){
	db.Unit.find(req.query,"_id title subtitle description requires").exec(function(err,units){
		if(err){return res.serverError();}
		res.json(units);
	});
};
var findOne=function(req,res){
	db.Unit.findOne({_id: req.params.id}).populate("requires","_id title").exec(function(err,unit){
		if(err){res.serverError(err);}
		if(unit){res.json(unit);}
	});
};

module.exports = {
	find: find,
	findOne: findOne
};