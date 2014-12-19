var fs,glob,yaml,Unit;
fs=require("fs");
Promise.promisifyAll(fs);
glob=Promise.promisify(require("glob"));
yaml=require("js-yaml");
Promise.promisifyAll(yaml);
Unit=require("./model");

glob("./content/*.yml")
.map(function(filename){
  return fs.readFileAsync(filename,"utf8")
  .then(yaml.load)
  .then(function(doc){
    return Unit.updateAsync({title: doc.title},doc,{upsert: true});
  });
})
.then(function(){
  console.log("yaml-Dateien eingelesen");
},function(e){
  console.error(e.stack);
});