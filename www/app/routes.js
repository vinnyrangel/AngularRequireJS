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
			}))
			.state('outside', {
				url: '/outside',
				templateUrl: '/outside/template.html',
				controller: 'outsideController'
			})
			.state('other', {
				url: '/other',
				templateUrl: '/other/template.html',
				controller: 'otherController'
			});

		$urlRouterProvider.otherwise('/');
	}

	return routes;
});
