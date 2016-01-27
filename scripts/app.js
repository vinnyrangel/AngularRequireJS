angular.module('app', ['ui.router.state', 'aboutController', 'contactController'])

.config(function($stateProvider, $locationProvider, $urlRouterProvider){
	$stateProvider
		.state('index', {
			url:'/'
		})
		.state('about', {
			url: '/about',
			templateUrl: '/templates/about.html',
			controller: 'aboutCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: '/templates/contact.html',
			controller: 'contactCtrl'
		});

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
});
