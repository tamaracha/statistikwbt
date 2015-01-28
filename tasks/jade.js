module.exports=function(gulp,plugins){
  var noIndexFile=function(file){
    return file.relative!=="index.html";
  };
  var templatesFile=function(file){
    return file.relative==="templates.js";
  };
  gulp.task("jade",function(){
    return gulp.src(["src/**/*.jade", "!src/mixins/*"])
    .pipe(plugins.jade({
      doctype: "html",
      pretty: false
    }))
.pipe(plugins.if(noIndexFile,plugins.angularTemplatecache("templates.js",{module: "wbt"})))
.pipe(plugins.if(templatesFile,plugins.uglify()))
    .pipe(gulp.dest("./public"));
  });
};