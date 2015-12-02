var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema(
	{
		name:{type:String,required:true},
		age:{type:Number,required:true},
		cpf:{type:Number,required:true,unique:true}
	}
);

UserSchema.index({cpf:1},{unique:true});

module.exports = mongoose.model("User",UserSchema);
