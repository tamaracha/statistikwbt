module.exports=function(req,res,next){
	var username=req.cred[0];
	var password=req.cred[1];
	db.User.findOne({_id: username},function(err,user){
		if(err){return next(err);}
		if(!user){return res.notFound();}
		user.validatePassword(password,function(err,result){
			if(err){return next(err);}
			if(!result){return res.send(401);}
			req.user=user;
			return next();
		});
	});
};