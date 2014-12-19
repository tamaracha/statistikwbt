module.exports = function(gulp, plugins, growl) {
  gulp.task('copy', function() {
    return gulp.src('./src/**/*.!(coffee|less|jade|sass|js)')
    .pipe(gulp.dest('./public'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'Copy dev task complete' })));
  });
};