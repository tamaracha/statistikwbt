module.exports=function(gulp,plugins,growl){
  gulp.task("scripts",["libs"],function(){
    return gulp.src([
      "src/index.js",
      "src/common/**/*.js",
      "src/**/*.js"
    ])
    .pipe(plugins.jshint())
    .pipe(plugins.notify({title: "jshint", message: function(file){
      if(file.jshint.success){return false;}
      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }}))
    .pipe(plugins.concat("index.js"))
    .pipe(plugins.ngAnnotate())
    .pipe(gulp.dest("public"))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: ".min"}))
    .pipe(gulp.dest("public"));
  });
};