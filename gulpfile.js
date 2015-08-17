'use strict';
const gulp=require('gulp');
const del=require('del');
const webpack=require('webpack');
const $=require('gulp-load-plugins')();
$.webpack_dev=webpack(require('./webpack.config.js'));
$.webpack_prod=webpack(require('./webpack.config.min.js'));
const versions = {
  angular: '1.4.3',
  bootstrap: '3.3.5',
  d3: '3.5.6',
  fontAwesome: '4.4.0',
  lodash: '3.10.1',
  restangular: '1.5.1',
  vega: '2.0.6'
};

gulp.task('eslint',function(){
  return gulp.src(['*.js','api/**/*.js'])
  .pipe($.gitmodified('modified'))
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failOnError());
});

gulp.task('yamlValidate',function(){
  return gulp.src(['./config/*.{yaml,yml}'])
  .pipe($.yamlValidate());
});

gulp.task('lint',gulp.parallel([
  'eslint',
  'yamlValidate'
]));

gulp.task('hooks',function(){
  return gulp.src(['.git-hooks/pre-commit','.git-hooks/post-merge'])
  .pipe($.sym(
    ['.git/hooks/pre-commit','.git/hooks/post-merge'],
    {relative: true,force: true}
  ));
});

gulp.task('clean',function(cb){
  del('dist/*',cb);
});

gulp.task('jade_dev',function(){
  return gulp.src('src/index.jade')
  .pipe($.jade({
    locals: {env: 'development',versions},
    doctype: 'html'
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('jade_prod',function(){
  return gulp.src('src/index.jade')
  .pipe($.jade({
    locals: {env: 'production',versions},
    doctype: 'html'
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('webpack_dev',function(cb){
  return $.webpack_dev.run(cb);
});

gulp.task('webpack_prod',function(cb){
  return $.webpack_prod.run(cb);
});

gulp.task('compress',function(){
  return gulp.src('./dist/*')
  .pipe($.gzip())
  .pipe(gulp.dest('./dist'));
});

gulp.task('images',function(){
  gulp.src('src/images/*')
  .pipe($.imagemin({progressive: true}))
  .pipe(gulp.dest('dist/images'));
});

gulp.task('dev',gulp.series([
  'clean',
  gulp.parallel([
    'webpack_dev',
    'images'
  ])
]));
gulp.task('default',gulp.series([
  'clean',
  gulp.parallel([
    'webpack_prod',
    'images'
  ])
]));
