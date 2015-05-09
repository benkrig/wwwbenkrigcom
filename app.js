var app = angular.module('benkrig', ['ngRoute']);

app.config(function($routeProvider)
{
	$routeProvider
	.when('/',
	{
		templateUrl: '/partials/home.html',
		controller : 'global_controller'
	})
	.when('/work',
	{
		templateUrl: 'partials/work.html',
		controller : 'global_controller'
	});
});

var controllers = {};

controllers.global_controller = function($scope)
{

};

app.controller(controllers);