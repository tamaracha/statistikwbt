module.exports=function(gulp,plugins){
  gulp.task('libs',function(){
    return gulp.src([
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'bower_components/vega/vega.min.js',
      'bower_components/ng-debounce/angular-debounce.js',
      'bower_components/ng-vega/src/ng-vega.js',
      'bower_components/ngstorage/ngStorage.min.js'
    ])
    .pipe(plugins.concat('libs.js'))
    .pipe(gulp.dest('public'));
  });
};