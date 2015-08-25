'use strict';
const gulp=require('gulp');
const del=require('del');
const webpack=require('webpack');
const $=require('gulp-load-plugins')();
$.webpack_prod=webpack(require('./webpack.production.config.js'));

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

gulp.task('webpack_prod',function(cb){
  return $.webpack_prod.run(cb);
});

gulp.task('compress',function(){
  return gulp.src('./dist/*')
  .pipe($.gzip({
    gzipOptions: {level: 9}
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('images',function(){
  return gulp.src('src/images/*')
  .pipe($.imagemin({progressive: true}))
  .pipe(gulp.dest('dist/images'));
});

gulp.task('default',gulp.series([
  'clean',
  gulp.parallel([
    'webpack_prod',
    'images'
  ]),
  'compress'
]));
