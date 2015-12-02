angular.module("store").factory("productService", function($http) {

	var products = {};
	
	var _loadProducts = function(){
		$http.get("http://localhost:3000/products").success(function(data){
			products = data;
			return products;
		}).error(function(data){
			console.log("error");
		});
	};

	var _getProducts = function(){
		return products.result;
	};

	return {
		getProducts:_getProducts,
		loadProducts:_loadProducts
	};

});