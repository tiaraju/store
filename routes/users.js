var express = require('express');
var User = require('../model/user')
var router = express.Router();

router.get('/\/user',function(req,res){
	var username = req.query.username;

	User.findOne({name:username},function(err,doc){
		if(err){
			res.status(500);
		}else{
			var result = doc;
			res.contentType=('application/json');
			res.send(JSON.stringify({"result":result}));
		}	
	});
});


router.post('/adduser',function(req,res){
	var user = new User(req.body);
	var error= {};
	var result = {};

	user.save(function(err){
		if(err){
			error.code = err.code;
			error.message = err.message;
	      //11000: MongoError's duplicated key
	      error.code == 11000 ? res.status(409) : res.status(500);
	  }else{
	  	 res.status(201); //HTTP created code
	  	 result.uri = "/users/user/" + user.name;
	  	}

	  	res.send(JSON.stringify({"result": result, "error": error}));
	  });
});

module.exports = router;
