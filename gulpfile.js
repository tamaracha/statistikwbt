var gulp,gulpLoadPlugins,requireDirectory,plugins,tasks,_;
gulp=require("gulp");
gulpLoadPlugins=require("gulp-load-plugins");
requireDirectory=require("node-require-directory");
_=require("lodash");

plugins=gulpLoadPlugins();
tasks=requireDirectory("./tasks");
_.forEach(tasks,function(task){
  task(gulp,plugins);
});