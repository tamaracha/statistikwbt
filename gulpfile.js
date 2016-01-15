'use strict';
const gulp=require('gulp');
const $=require('gulp-load-plugins')();
const del = require('del');

gulp.task('clean', function(cb){
  return del('./dist/**', cb);
});

gulp.task('eslint',function(){
  return gulp.src(['*.js','api/**/*.js'])
  .pipe($.gitmodified('modified'))
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failOnError());
});

gulp.task('yamlValidate',function(){
  return gulp.src(['api/*.yml','config/*.{yaml,yml}'])
  .pipe($.yamlValidate());
});

gulp.task('lint',gulp.parallel([
  'eslint',
  'yamlValidate'
]));

gulp.task('templates', function() {
  return gulp.src('./src/index.jade')
  .pipe($.jade({
    client: true
  }))
  .pipe($.jadeJstConcat('index.js'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('default',gulp.series([
  'lint',
  'clean',
  'templates'
]));
