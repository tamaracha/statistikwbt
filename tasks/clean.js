 var del=require("del");

module.exports = function(gulp, plugins, growl) {
  gulp.task('clean', function(cb) {
    return del("public/*",cb);  });
};