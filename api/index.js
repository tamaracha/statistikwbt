var bodyParser,passport,router,resources;
bodyParser=require("body-parser");
router=require("express").Router();
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

// Resources
resources=require('node-require-directory')(__dirname);
_.forEach(resources,function(resource){
  resource.index(router);
});
module.exports=router;