module.exports=function(gulp,plugins,growl){
var browserify,watchify,source;
browserify = require('browserify');
watchify = require('watchify');
source = require('vinyl-source-stream');

var bundler = watchify(browserify('./src/index.js',watchify.args));
var bundle=function() {
  plugins.notify.logLevel(1);
  return bundler.bundle()
    .on('error', plugins.util.log.bind(plugins.util, 'Browserify Error'))
    .pipe(source('index.js'))
    .pipe(gulp.dest("./public"))
    /*
    .pipe(buffer())
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: ".min"}))
    .pipe(gulp.dest('./public'))
    */
    .pipe(plugins.notify({
      title: "Gulp Watchify",
      message: "<%=file.relative%>"
    }));
};

gulp.task('watchify', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
};