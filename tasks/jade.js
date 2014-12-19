module.exports=function(gulp,plugins,growl){
	gulp.task("jade",function(){
		return gulp.src(["src/**/*.jade", "!src/mixins/*"])
		.pipe(plugins.jade({
			doctype: "html",
			pretty: false
		}))
		.pipe(gulp.dest("./public"));
	});
};