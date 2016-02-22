var homeApp = angular.module('homeApp', ['ngRoute']);

homeApp.config(function($routeProvider)) {

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
		})

}
