var Q,pdc,pandoc,fs,template,compiled,find,mime;
Q=require("q");
fs=require("fs");
pdc=require("pdc");
mime=require("mime");
pandoc=Q.nfbind(pdc);
template=fs.readFileSync("./templates/doc.md","utf8");
compiled=_.template(template);

find=function(req,res){
	var format,md,pandocArgs,binary;
	format=req.query.format;
	pandocArgs=["-s"];
	var query=db.Unit.find();
	if(req.query.units){query.in("_id",req.query.units);}
	return query.exec().then(function(result){
		md=compiled({units: result});
		if(format==="markdown"){return md;}
		binary=["docx","epub"];
		text=["rtf","html","latex"];
		isBin=_.contains(binary,format);
		isText=_.contains(text,format);
		if(!isBin&&!isText){return Q.reject("unsupported format");}
		if(isBin){
			pandocArgs.push("-o");
			pandocArgs.push(".tmp/fileCache/Statistik."+format);
		}
		return pandoc(
			md,
			"markdown",
			format,
			pandocArgs
		);
	}).then(function(doc){
		if(pandocArgs[2]){return res.download(pandocArgs[2]);}
		else{
			res.setHeader("content-type",mime.lookup(format));
			res.setHeader("content-disposition","attachment; filename=Statistik."+format);
			return res.send(doc);
		}
	},function(err){
		res.serverError(err);
	});
};

module.exports = {
	find: find
};