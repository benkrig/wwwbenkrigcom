var app = angular.module('benkrig', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider)
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
	.when('/blog',
	{
		templateUrl: 'partials/blog.html',
		controller : 'global_controller'	
	})
	.otherwise(
	{
		templateUrl: 'partials/home.html',
		controller: 'NavBarController'
	});
	
	$locationProvider.html5Mode(true);
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
	$scope.blogs = 
	[
		{
			code: "",
			image: ['blogs/ben.png', 'blogs/haar_features_basic.jpeg', 'blogs/haar_features_man.jpeg', 'blogs/pixel_representation.png', 'blogs/integral_image.png', 'blogs/Summed_area_table.png', 'blogs/haar_drew_ben.png' ],
			title: "OpenCV: Facial Recognition using Haar Feature-based Cascade Classifiers",
			subtitle: "Viola and Jones Method",
			date: "4/4/17"
		},
		{
			image: ['blogs/edge_detection_img1.png'],
			title:"OpenCV: Gradients, Sobel Operators, and Canny Edge Detection",
			subtitle:"Or Basic Edge Detection",
			date: "4/24/17"
		}
		
	];
};

app.controller(controllers);