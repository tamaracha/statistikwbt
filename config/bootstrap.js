var fs, path, glob, yaml;
fs=require("fs");
path=require("path");
glob=require("glob");
yaml=require("js-yaml");
/*
express=require("express");
http=express();
*/

module.exports.bootstrap = function(cb) {
db.Unit.collection.remove(function(err,docs){
	if(err){return sails.log.debug(err);}
	if(docs){sails.log.debug("removed");}
glob("content/*.yml",{},function(err,files){
	files.forEach(function(file){
		try{
			var doc=yaml.load(fs.readFileSync(file,"utf8"));
		}
		catch(e){sails.log.error(e);}
		db.Unit.create(doc,function(err,unit){
			if(err){return sails.log.error(err);}
			if(unit){return sails.log.debug("%s wurde aktualisiert.",unit.title);}
		});
	});
});
});

/*
http.use(require("morgan")("combined"));
http.get("/statistik_span",function(req,res){
	res.redirect("http://134.176.76.100:8080");
});
http.all("*.cgi",function(req,res){
	res.status(404).end();
});
http.all("*",function(req,res){
	res.redirect('https://t-cook.de'+req.url);
});
http.listen(8080);
*/

cb();
};
