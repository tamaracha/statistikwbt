var Subject,e;
Subject=require("./models/subject");
e=require("./errors");

exports.find=function(req,res){
  Subject.find({
    $text: {
      $search: req.query.search,
      $language: "de"
    }
  },{
    textScore: {$meta: "textScore"}
  })
  .sort({textScore: {$meta: "textScore"}})
  .execAsync()
  .then(function(subjects){
    return res.json(subjects);
  })
  .catch(e.onError(res));
};