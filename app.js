angular.module('app', ['ui.router.state', 'aboutController', 'contactController'])

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('index', {
			url:'/'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'about.html',
			controller: 'aboutCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'contact.html',
			controller: 'contactCtrl'
		});
	$urlRouterProvider.otherwise('/');
});
