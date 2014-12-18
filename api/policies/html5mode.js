module.exports=function(req,res,next){
	var n=req.url.indexOf(".");
	if(n!==-1){return next();}
	n=req.url.indexOf("/api");
	if(n===0){return next();}
	res.sendfile(sails.config.appPath+"/.tmp/public/index.html");
};