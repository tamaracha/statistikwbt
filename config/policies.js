module.exports.policies = {
	UserController: {
		"*": false,
		findOne: ["tokenAuth","tokenId"],
		"create" : true,
		"update": ["tokenAuth","tokenId"],
		"find" : ["timeout","check"]
	},
	tokenController: {
		"*": false,
		"findOne" : ["basicAuth","userAuth"],
		"create" : ["timeout","check"]
	}
};
