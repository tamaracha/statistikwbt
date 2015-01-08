module.exports=function(router){
var controller=require("./controller");

router.route("/ratings")
.get(controller.find)
.post(controller.create);

router.route("/ratings/:id")
.get(controller.findOne)
.put(controller.update)
.delete(controller.remove);
};