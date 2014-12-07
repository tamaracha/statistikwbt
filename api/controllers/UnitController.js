var find=function(req,res){
	var query=db.Unit.find(req.query);
	query.select("_id position title subtitle description requires");
	query.lean();
	return query.exec()
	.then(function(units){
		return res.json(units);
	},function(err){
		return res.serverError(err);
	});
};

var findOne=function(req,res){
	var query=db.Unit.findOne({_id: req.params.id});
	query.populate("requires","_id title");
	query.lean();
	return query.exec()
	.then(function(unit){
		return res.json(unit);
	},function(err){
		return res.serverError(err);
	});
};

module.exports = {
	find: find,
	findOne: findOne
};