var router=require("express").Router();

// middleware
var bodyParser,expressJwt;
bodyParser=require("body-parser");
expressJwt=require("express-jwt")({
  secret: config.jwt.secret,
  audience: config.jwt.options.audience,
  issuer: config.jwt.options.issuer
});

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

/* routes */
// units
var unit=require("./unit");
router.route("/units")
.get(unit.find)
.post(unit.create);
router.route("/units/:unit")
.get(unit.findOne);

// topics
var topic=require("./topic");
router.route("/units/:unit/topics/:topic")
.get(expressJwt,topic.findOne);

router.route("/units/:unit/akzeptanz/summary")
.get(expressJwt,unit.akzeptanz);

router.route("/units/:unit/guesses/summary")
.get(expressJwt,unit.guesses);

// tests
var test=require("./test");
router.route("/units/:unit/tests")
.get(test.find);
router.route("/units/:unit/tests/:test")
.get(test.findOne);

// users
var user=require("./user");
router.route("/users")
.head(user.check)
.post(user.create);
router.route("/users/:user")
.all(expressJwt)
.get(user.findOne)
.patch(user.update)
.delete(user.remove);

// tokens
var token=require("./token");
router.route("/tokens/login")
.get(token.login);

// ratings
var rating=require("./rating");
router.route("/ratings")
.post(expressJwt,rating.create);

// comments
var comment=require("./comment");
router.route("/comments")
.post(expressJwt,comment.create);

// views
var view=require("./view");
router.route("/views")
.post(expressJwt,view.create);

// exams
var guess=require("./guess");
router.route("/guesses")
.post(expressJwt,guess.create);

// downloads
var download=require("./download");
router.route("/downloads")
.get(download.checkUser,download.find);

var subject=require("./subject");
router.route("/subjects")
.get(subject.find);

// Vega
var vega=require("./vega");
router.route("/vega-specs/:spec")
.get(vega.findOne);

// upload units
require("./upload");
require("./vega-upload");
//require("./subject-upload");

module.exports=router;