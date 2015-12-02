angular.module("store").config(function($routeProvider){

	$routeProvider.when("/start",{
		templateUrl:"views/start.html",
		controller:"productController",
		resolve:{
			products:function(productService){
				return productService.loadProducts();
			}
		}
	});

	$routeProvider.otherwise({
		redirectTo:"/start"
	});
});