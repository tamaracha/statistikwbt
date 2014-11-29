module.exports=function(req,res,next){
	if(!req.user.id||!req.params.id){return res.serverError();}
	if(req.params.id!==req.user.id){return res.send(401);}
	next();
};