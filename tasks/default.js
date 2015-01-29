module.exports=function(gulp,plugins){
  gulp.task("default",["clean","jade","libs","scripts"],function(){
    gulp.watch("src/**/*.jade",["jade"]);
    gulp.watch("src/**/*.js",["scripts"]);
  });
};