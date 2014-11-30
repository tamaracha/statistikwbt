var gulp,pandoc,template,through,find;
gulp=require("gulp");
pandoc=require("gulp-pandoc");
template=require("gulp-template");
through = require('through');
var sendTo=function(res,format){
	return through(
        function write(data) {    // this will be called once for each file
			//res.attachment("statistikwbt."+format);
			//res.type(format);
			res.download("content/doc.docx");
        }
    );
};

find=function(req,res){
	var format="rtf";
	var query=db.Unit.find();
	if(req.query.units){query.in("_id",req.query.units);}
	return query.exec(function(err,result){
		if(err){return console.log(err);}
		gulp.src("templates/doc.md")
		.pipe(template({units: result}))
		.pipe(gulp.dest("content/"))
		.pipe(pandoc({
			from: "markdown",
			to: "docx",
			ext: ".docx",
			args: ["-s","-o doc.docx"]
		}))
		.pipe(gulp.dest("content/"))
		.pipe(sendTo(res,format));
	});
};

module.exports = {
	find: find
};