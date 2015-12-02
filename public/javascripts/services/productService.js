angular.module("store").factory('productService', function($http) {
	
	var _loadProducts = function(){
		$http.get("http://localhost:3000/products").success(function(data){
			return data;
		}).error(function(data){
			console.log("error");
		});
	};

	return {
		loadProducts:_loadProducts
	};

});