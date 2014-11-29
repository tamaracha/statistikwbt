module.exports = {
	findOne: function(req,res){
	var token=tokenize.sign({id: req.user._id});
	res.json(token);
	},
	create: function(req,res){
		var email=req.user.email;
		if(!email){return res.serverError();}
		mailer.reset(req.user,function(err,info){
			if(err){return res.serverError();}
			console.log(info.response.toString());
			res.send(200);
		});
	}
};