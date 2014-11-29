module.exports=function(req,res,next){
	var query=req.query;
	db.User.findOne(query,function(err,user){
		if(err){return next(err);}
		if(!user){return res.notFound();}
		req.user=user;
		return next();
});
};