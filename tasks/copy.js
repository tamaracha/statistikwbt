module.exports=function(gulp,plugins){
  gulp.task('copy', function() {
    return gulp.src('src/**/*.!(coffee|less|jade|sass|js)')
    .pipe(gulp.dest('public'))
  });
};