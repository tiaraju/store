var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema(
	{
		name:{type:String,required:true},
		description:{type:String,required:false},
		products:[{type:mongoose.Schema.Types.ObjectId,ref="Product"}]

	}
);

CategorySchema.index({name:1},{unique:true});

module.exports = mongoose.model("Category",CategorySchema);