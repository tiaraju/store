var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema(
	{
		name:{type:String,required:true},
		age:{type:Number,required:true},
		cpf:{type:Number,required:true,unique:true}

	}
);

module.exports = mongoose.model("User",UserSchema);
