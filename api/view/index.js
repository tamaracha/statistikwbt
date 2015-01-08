module.exports=function(router){
var controller=require("./controller");

router.route("/views")
.post(controller.create);
};