var helmet=require("helmet");

module.exports.http = {
	middleware: {
		logger: require("morgan")("dev"),
		csp: helmet.csp({
			defaultSrc: [
				"'self'"
			],
			scriptSrc: [
				"'self'",
				"https://ajax.googleapis.com",
				"https://cdnjs.cloudflare.com",
				"https://cdn.mathjax.org"
			],
			styleSrc: [
				"'self'",
				"'unsafe-inline'",
				"https://maxcdn.bootstrapcdn.com",
			],
			fontSrc: [
				"'self'",
				"https://maxcdn.bootstrapcdn.com"
			]
		}),
		xframe: helmet.xframe("sameorigin"),
		poweredBy: helmet.hidePoweredBy(),
		nosniff: helmet.nosniff(),
		compression: require("compression")(),
		order: [
			"logger",
			"bodyParser",
			"csp",
			"xframe",
			"poweredBy",
			"nosniff",
			"compression",
			"router",
			"www",
			"404",
			"500"
		],
	}

	// cache: 31557600000
};
