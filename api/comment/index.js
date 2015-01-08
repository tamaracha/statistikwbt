module.exports=function(router){
var controller=require("./controller");

router.route("/comments")
.post(controller.create);
};