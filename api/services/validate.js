var validate=require("mongoose-validator");

module.exports={
  passwordValidator: validate({
    validator: "isLength",
    arguments: [8],
    message: "password must have at least eight characters"
  }),
  emailValidator: validate({
    validator: "isEmail",
    message: "not a valid email address"
  })
};