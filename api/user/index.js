module.exports=function(router){
var controller=require("./controller");
router.route("/users")
.head(controller.check,controller.head)
.post(controller.create);

router.route("/users/:id")
.get(controller.findOne)
.put(controller.update)
.delete(controller.remove);
};