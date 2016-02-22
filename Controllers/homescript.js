var HomeApp = angular.module('HomeApp', ['ngRoute']);

HomeApp.config(function($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl : 'pages/title.html',
			controller : 'TitleController'
		})

		.when('/Projects', {
			templateUrl : 'Pages/projects.html',
			controller : 'ProjectController'
		})

		.when('/About', {
			templateUrl : 'Pages/about.html'
			controller : 'AboutController'
		})

		.when('/Resume', {
			templateUrl : 'Pages/resume.html',
			controller : 'ResumeController'
		})

		.when('/Contact', {
			templateUrl : 'Pages/contact.html',
			controller : 'ContactController'
		});

});

HomeApp.controller('TitleController', function($scope) {
	$scope.title = "Welcome to My Personal Website!";
})

HomeApp.controller('ProjectController', function($scope) {
	$scope.title = "Here are some Projects I've Made!";
})

HomeApp.controller('AboutController', function($scope) {
	$scope.title = "Nice to Meet You!";
})

HomeApp.controller('ResumeController', function($scope) {
	$scope.title = "Click the Link for a PDF of my Resume!";
})

HomeApp.controller('ContactController', function($scope) {
	$scope.title = "Here is my Contact Information!";
})