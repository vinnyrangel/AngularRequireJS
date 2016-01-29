define(['angularAMD'], function(angularAMD){
	'use strict';

	function routes($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('index', angularAMD.route({
				url:'/'
			}))
			.state('about', angularAMD.route({
				url: '/about',
				templateUrl: '/templates/about.html',
				controller: 'aboutController'
			}))
			.state('contact', angularAMD.route({
				url: '/contact',
				templateUrl: '/templates/contact.html',
				controller: 'contactController'
			}));
		$urlRouterProvider.otherwise('/');
	}

	return routes;
});
