var app = angular.module('benkrig', ['ngRoute', 'ui.bootstrap']);

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
	})
	.when('/contact',
	{
		templateUrl: 'partials/contact.html',
		controller : 'global_controller'
	})
	.otherwise(
	{
		templateUrl: 'partials/home.html',
		controller: 'NavBarController'
	});
});

var controllers = {};

controllers.global_controller = function($scope, $location)
{
	$scope.isActive = function (viewLocation)
	{
		return viewLocation === $location.path();
	};

	$scope.myInterval = 3000;
	$scope.slides = 
	[
		{
			image: 'slides/slide1_framed.png'
		},
		{
			image: 'slides/slide2_framed.png'
		}
	];
};

app.controller(controllers);