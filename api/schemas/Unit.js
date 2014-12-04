module.exports = {
	attributes: {
		_id: {
			type: String,
			required: true
		},
		position: Number,
		title: {
			type: String,
			required: true,
		},
		subtitle: String,
		description: {
			type: String,
			required: true
		},
		requires: [{
			type: String,
			ref: "Unit",
		}],
		topics: [{
			_id: {
				type: String,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			subtitle: String,
			body: {
				type: String,
//				required: true
			},
			examples: [{
				title: {
					type: String,
					required: true
				},
				subtitle: String,
				body: {
					type: String,
					required: true
				}
			}],
			tests: [{
				type: db.ObjectId,
				ref: "test"
			}],
			extras: [{
				title: {
					type: String,
					required: true
				},
				subtitle: String,
				body: {
					type: String,
					required: true
				}
			}],
		}],
  }
};  	