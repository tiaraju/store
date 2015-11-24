angular.module("store").config(function($routeProvider){

	$routeProvider.when("/start",{
		templateUrl:"views/start.html"
	});

	$routeProvider.otherwise({
		redirecTo:"/start"
	});
});