var express = require('express');
var Product = require('../model/product');
var router = express.Router();

router.get('/',function(req,res){
	Product.find(function(err,doc){
		if(err){
			res.status(500);
		}else{
			var result = doc;
			res.contentType=('application/json');
			res.send(JSON.stringify({"result":result}));

		}});
});

router.get('/\/product',function(req,res){
	var productname = req.query.productname;

	Product.findOne({name:productname},function(err,doc){
		if(err){
			res.status(500);
		}else{
			var result = doc;
			res.contentType=('application/json');
			res.send(JSON.stringify({"result":result}));
		}	
	});
});


router.post('/addproduct',function(req,res){
	var product = new Product(req.body);
	var error= {};
	var result = {};

	product.save(function(err){
		if(err){
			error.code = err.code;
			error.message = err.message;
	      //11000: MongoError's duplicated key
	      error.code == 11000 ? res.status(409) : res.status(500);
	  }else{
	  	 res.status(201); //HTTP created code
	  	 result.uri = "/products/product/" + product.name;
	  	}

	  	res.send(JSON.stringify({"result": result, "error": error}));
	  });
});


module.exports = router;