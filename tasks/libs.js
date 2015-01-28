module.exports=function(gulp,plugins){
  gulp.task("libs",function(){
    return gulp.src([
      "bower_components/angular-ui-router/release/angular-ui-router.min.js",
      "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
    ])
    .pipe(plugins.concat("libs.js"))
    .pipe(gulp.dest("public"));
  });
};