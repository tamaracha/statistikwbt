var create=function(req,res){
	var query=db.User.create(req.body);
	query.lean();
	return query.exec().then(function(user){
		return res.json(user);
	},function(err){
		return res.serverError(err);
	});
};

var find=function(req,res){
	return res.ok();
};

var findOne=function(req,res){
	var query=db.User.findOne({_id: req.params.id});
	query.lean();
	query.exec().then(function(user){
		return user ? res.notFound() : res.json(user);
	},function(err){
		return res.serverError(err);
	});
};

module.exports = {
	create: create,
	find: find,
	findOne: findOne
};