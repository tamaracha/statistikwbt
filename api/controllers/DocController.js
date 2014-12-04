var Q,pdc,pandoc,fs,template,compiled,find,mime,binary,text;
Q=require("q");
fs=require("fs");
pdc=require("pdc");
mime=require("mime");
pandoc=Q.nfbind(pdc);
template=fs.readFileSync("./templates/doc.md","utf8");
compiled=_.template(template);
binary=["docx","epub"];
text=["markdown","rtf","html","latex"];

find=function(req,res){
	var query,format,md,pandocArgs,isBin,isText;
	format=req.query.format;
	pandocArgs=["-s"];
	query=db.Unit.find();
	if(req.units){query.in("_id",req.units);}
	query.sort({position: 1});
	query.lean();
	return query.exec().then(function(result){
		md=compiled({
			units: result,
			query: req.query
		});
		if(format==="markdown"){return md;}
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
		return res.serverError(err);
	});
};

module.exports = {
	find: find
};