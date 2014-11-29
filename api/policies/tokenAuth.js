var expressJwt=require("express-jwt");
module.exports=expressJwt({
	secret: sails.config.token.secret
});
