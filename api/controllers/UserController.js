var create=function(req,res){
	db.User.create(req.body,function(err,user){
		if(err){return res.serverError(err);}
		res.json(user);
	});
};

var find=function(req,res){
	res.end();
};

var findOne=function(req,res){
	db.User.findOne({_id: req.params.id},function(err,user){
		if(err){return res.serverError(err);}
		if(!user){return res.notFound();}
		res.json(user);
	});
};

module.exports = {
	create: create,
	find: find,
	findOne: findOne
};