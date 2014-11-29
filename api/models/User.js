var bcrypt = require('bcrypt-nodejs');

module.exports = {
	tableName: "userInfo",
	attributes: {
		name: {
			type: "text",
			required: true,
			unique: true,
			alphanumericdashed: true,
			primaryKey: true
		},
		password: {
			type: "string",
			required: true,
			minLength: 8,
			protected: true
		},
		email: {
			type: "email",
			unique: true,
			protected: true
		},
		validatePassword: function (password, next) {
			bcrypt.compare(password, this.password, next);
		},
	},
	beforeCreate: function(attrs,next){
		bcrypt.genSalt(10,function(err,salt){
			if(err) return next(err);
			bcrypt.hash(attrs.password,salt,function(err,hash){
				if(err) return next(err);
				attrs.password=hash;
				next();
			});
		});
	},
	beforeUpdate: function(attrs,next){
		if(!attrs.password){return next();}
		bcrypt.genSalt(10,function(err,salt){
			if(err) return next(err);
			bcrypt.hash(attrs.password,salt,function(err,hash){
				if(err) return next(err);
				attrs.password=hash;
				next();
			});
		});
	}
};