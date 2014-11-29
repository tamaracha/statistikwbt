var bcrypt = require('bcrypt-nodejs');

module.exports={
	attributes: {
		_id: {
			type: String,
			required: true,
			unique: true,
			validate: validate.nameValidator
		},
		password: {
			type: String,
			required: true,
			validate: validate.passwordValidator
		},
		agree: Boolean,
		email: {
			type: String,
			validate: validate.emailValidator
		},
	},
	methods: {
		validatePassword: function (password,cb) {
			bcrypt.compare(password, this.password,function(err,isMatch){
				if(err){return cb(err);}
				if(!isMatch){return cb(null,false);}
				else{cb(null,isMatch);}
			});
		},
	},
		beforeSave: function(attrs,next){
		user=attrs;
		if(!user.isModified("password")){return next();}
		bcrypt.genSalt(10,function(err,salt){
			if(err){return next(err);}
			bcrypt.hash(user.password,salt,function(err,hash){
				if(err){return next(err);}
				user.password=hash;
				next();
			});
		});
	},
	options: {
		collection: "userInfo",
		toJSON: {
			transform: function(doc,ret,options){
				if(ret.password){delete ret.password;}
			}
		}
	}
};
