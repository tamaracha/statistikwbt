module.exports=function(router){
require("./upload");
var controller=require("./controller");
router.route("/units")
.get(controller.find)
.post(controller.create);

router.route("/units/:id")
.get(controller.findOne)
.put(controller.update)
.delete(controller.remove);


router.route("/units/:title/topics/:topic")
.get(controller.findOneTopic);

};