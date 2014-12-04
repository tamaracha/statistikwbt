module.exports=function(req,res,next){
	var query=db.User.findOne(req.query);
	query.lean();
	return query.exec().then(function(user){
		if(!user){return res.notFound();}
		req.user=user;
		return next();
	},function(err){
		return res.serverError(er);
	});
};