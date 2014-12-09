var Promise,fs,glob,yaml;
Promise=require("bluebird");
fs=require("fs");
Promise.promisifyAll(fs);
glob=Promise.promisify(require("glob"));
yaml=require("js-yaml");
Promise.promisifyAll(yaml);

module.exports.bootstrap = function(cb) {
glob("./content/*.yml")
.map(function(filename){
  return fs.readFileAsync(filename,"utf8")
  .then(yaml.load)
  .then(function(doc){
    return db.Unit.updateAsync({_id: doc._id},doc,{upset: true});
  })
  .catch(function(e){
    sails.log.error(e.message);
  });
});

cb();
};