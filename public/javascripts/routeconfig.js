angular.module("store").config(function($routeProvider,productService){

	$routeProvider.when("/start",{
		templateUrl:"views/start.html",
		controller:"productController",
		resolve:{
			productService.loadProducts();
		}
	});

	$routeProvider.otherwise({
		redirectTo:"/start"
	});
});