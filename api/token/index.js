module.exports=function(router){
var controller=require("./controller");
router.route("/tokens/:id")
.get(controller.login,controller.findOne);
};