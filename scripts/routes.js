define('routes', [], function(){
	'use strict';

	function routes($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('index', {
				url:'/'
			})
			.state('about', {
				url: '/about',
				templateUrl: '/templates/about.html',
				controller: 'aboutController'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: '/templates/contact.html',
				controller: 'contactController'
			});
		$urlRouterProvider.otherwise('/');
	}

	routes.$inject=['$stateProvider', '$urlRouterProvider'];

	return routes;
});
