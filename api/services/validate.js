var validate=require("mongoose-validator");

module.exports={
	nameValidator: [validate({
		validator: "isAlphanumeric",
		message: "alpha"
	}),validate({
		validator: "isLength",
		arguments: [3,50],
		message: "length"
	})],
	passwordValidator: validate({
		validator: "isLength",
		arguments: [8],
		message: "xyz"
	}),
	emailValidator: validate({
		validator: "isEmail",
		message: "xyz"
	})
};