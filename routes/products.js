var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send("Products router working");
	
});

router.post('/addProduct',function(req,res){


});


module.exports = router;