var gulp,pandoc,template,find;
gulp=require("gulp");
pandoc=require("gulp-pandoc");
template=require("gulp-template");
var through = require('through');
var debug=require("gulp-debug");
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
		.pipe(debug({
			verbose: true
		}))
		.pipe(template({units: result}))
		.pipe(debug({verbose: true}))
		.pipe(gulp.dest("content/"))
		.pipe(pandoc({
			from: "markdown",
			to: "docx",
			ext: ".docx",
			args: ["-s","-o doc.docx"]
		}))
		.pipe(debug({verbose: true}))
		.pipe(gulp.dest("content/"))
		.pipe(sendTo(res,format));
	});
};

module.exports = {
	find: find
};