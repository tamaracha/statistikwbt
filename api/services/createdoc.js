var fs,template,compiled;
fs=require("fs");
template=fs.readFileSync(process.cwd()+"/templates/doc.md");
compiled=_.template(template);
module.exports=compiled;