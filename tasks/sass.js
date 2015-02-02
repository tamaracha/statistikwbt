module.exports=function(gulp,plugins){
  gulp.task("sass",function(){
    return gulp.src("src/**/*.scss")
    .pipe(plugins.sass({
      ErrLogToConsole: true,
      outputStyle: "compressed"
    }))
    .pipe(gulp.dest("public"));
  });
};