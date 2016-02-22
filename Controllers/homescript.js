var homeApp = angular.module('homeApplication', ['ngRoute']);

homeApp.controller('HomeController', function($scope) {
	$scope.message = "hi";
});

homeApp.config(function($routeProvider) {

	$routeProvider

		.when('/homepage.html', {
			templateUrl : 'about.html',
		})

		.when('/Contact' {
			templateUrl : 'contact.html',
		})

		.when('/Projects' {
			templateUrl : 'projects.html',

		})

		.when('/Resume' {
			templateUrl : 'resume.html',
		});

});
