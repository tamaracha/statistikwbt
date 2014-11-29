module.exports = {
	attributes: {
		title: String,
		text: String,
		items: [{
			text: String,
			format: String,
			choices: [{
				value: String,
				correct: Boolean,
				feedback: String
			}],
			correct: String
		}]
	}
};