'use strict';
const gulp=require('gulp');
const $=require('gulp-load-plugins')();

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

gulp.task('hooks',function(){
  return gulp.src(['.git-hooks/pre-commit','.git-hooks/post-merge'])
  .pipe($.sym(
    ['.git/hooks/pre-commit','.git/hooks/post-merge'],
    {relative: true,force: true}
  ));
});

gulp.task('swaggerspec',function(){
  return gulp.src('api/swagger.yml')
  .pipe($.swagger('swagger.json'))
  .pipe(gulp.dest('api'));
});

gulp.task('swaggercode',function(){
  return gulp.src('api/swagger.yml')
  .pipe($.swagger({
    filename: 'api.js',
    codegen: {
      type: 'angular',
      moduleName: 'api'
    }
  }))
  .pipe(gulp.dest('src'));
});

gulp.task('swagger',gulp.parallel(['swaggerspec','swaggercode']));

gulp.task('templates', function() {
  gulp.src('./src/index.jade')
    .pipe($.jade({
      client: true
    }))
    .pipe($.jadeJstConcat('index.js'))
    .pipe(gulp.dest('./dist/'))
});
