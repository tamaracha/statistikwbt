module.exports=function(gulp,plugins){
  var noIndexFile=function(file){
    if(file.relative==="index.html"){return false;}
    return true;
  };
  gulp.task("jade",function(){
    return gulp.src(["src/**/*.jade", "!src/mixins/*"])
    .pipe(plugins.jade({
      doctype: "html",
      pretty: false
    }))
.pipe(plugins.if(noIndexFile,plugins.angularTemplatecache("templates.js",{module: "wbt"})))
    .pipe(gulp.dest("./public"));
  });
};