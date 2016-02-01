define(['angularAMD'], function(angularAMD){
	'use strict';

	function routes($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('index', angularAMD.route({
				url:'/'
			}))
			.state('about', angularAMD.route({
				url: '/about',
				templateUrl: '/app/templates/about.html',
				controller: 'aboutController'
			}))
			.state('contact', angularAMD.route({
				url: '/contact',
				templateUrl: '/app/templates/contact.html',
				controller: 'contactController'
			}));

		$urlRouterProvider.otherwise('/');
	}

	return routes;
});
