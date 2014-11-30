module.exports=function(gulp,plugins,growl){
	gulp.task("jade:dev",function(){
		return gulp.src("assets/**/*.jade")
		.pipe(plugins.jade({
			doctype: "html",
			compileDebug: false
		}))
		.pipe(gulp.dest(".tmp/public"))
		.pipe(plugins.if(growl, plugins.notify({
			title: "Gulp Jade",
			message: '<%=file.relative%> erzeugt'
		})));
	});
};