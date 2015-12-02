angular.module("store").controller("productController",function($scope,productService){
	$scope.products = productService.getProducts();
});