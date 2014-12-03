module.exports=function(gulp,plugins,growl){
	var browserify,transform;
	browserify=require("browserify");
	transform=require("vinyl-transform");
	gulp.task("browserify",function(){
		var browserified=transform(function(file){
			return browserify(file)
			.bundle();
		});
		return gulp.src("./assets/index.js")
		.pipe(browserified)
		.pipe(gulp.dest(".tmp/public"))
		.pipe(plugins.uglify())
		.pipe(plugins.rename({suffix: ".min"}))
		.pipe(gulp.dest(".tmp/public"))
		.pipe(plugins.if(growl,plugins.notify({
			title: "Gulp Browserify",
			message: '<%=file.relative%> wurde erstellt'
		})));
	});
};