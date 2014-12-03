module.exports=function(gulp,plugins,growl){
	gulp.task("jade:dev",function(){
		return gulp.src(["assets/**/*.jade", "!assets/mixins/*"])
		.pipe(plugins.jade({
			doctype: "html",
			pretty: true
		}))
		.pipe(gulp.dest(".tmp/public"))
		.pipe(plugins.if(growl, plugins.notify({
			title: "Gulp Jade",
			message: '<%=file.relative%> erzeugt'
		})));
	});
};