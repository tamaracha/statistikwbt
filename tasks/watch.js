module.exports=function(gulp,plugins){
  gulp.task("watch",["clean","copy","jade","libs","scripts"],function(){
    gulp.watch("src/**/*.jade",["jade"]);
    gulp.watch("src/**/*.scss",["sass"]);
    gulp.watch("src/**/*.js",["scripts"]);
  });
};