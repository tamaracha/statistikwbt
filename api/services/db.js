var mongoose, uniqueValidator, glob, path, connection, db, models, createMongooseModel, iterateModels;
mongoose = require('mongoose');
uniqueValidator=require("mongoose-unique-validator");
glob = require("glob");
path = require('path');
connection=sails.config.connections[sails.config.models.connection];
mongoose.connect(process.env.MONGOHQ_URL||"mongodb://"+connection.host+":"+connection.port+"/"+connection.database);

createMongooseModel=function(schema_description, model_name) {
	if(schema_description.options){
		var schema = new mongoose.Schema(schema_description.attributes,schema_description.options);
	}
	else{var schema = new mongoose.Schema(schema_description.attributes);}
	if(schema_description.plugins){schema.plugin(schema_description.plugins);}
	schema.plugin(uniqueValidator);
	 if (schema_description.methods){schema.methods = schema_description.methods;}
	 if (schema_description.statics){schema.statics = schema_description.statics;}
	if (schema_description.beforeSave){
		schema.pre('save', function (next){
			schema_description.beforeSave(this, next);
		});
	}
	if(schema_description.virtuals){
		schema_description.virtuals.forEach(function(virtual){
			schema.virtual(virtual.name).get(virtual.get).set(virtual.set);
		});
	}
	return mongoose.model(model_name, schema)
};

iterateModels=function(){
	glob("api/schemas/*.js", {}, function (err, files){
		files.forEach(function(file){
			var basename = path.basename(file, '.js');
			var tmp_schema = require(process.cwd()+ '/' + file);
			models[basename] = createMongooseModel(tmp_schema, basename);
		});
	});
}

db = mongoose.connection;
models = {};
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', iterateModels);

// Expose Mixed type and ObjectId type for Models
models.Mixed = mongoose.Schema.Types.Mixed;
models.ObjectId = mongoose.Schema.Types.ObjectId;
// Expose all models loaded
module.exports = models;
