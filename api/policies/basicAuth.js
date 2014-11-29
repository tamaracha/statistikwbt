var atob=require("atob");
module.exports=function(req,res,next){
	if(!req.headers.authorization){return res.forbidden();}
	var enc=req.headers.authorization.split(" ");
	if(enc[0]!=="basic"){return res.forbidden();}
	var dec=atob(enc[1]);
	var cred=dec.split(":");
	if(cred.length!==2){return res.forbidden();}
	req.cred=cred;
	next();
};