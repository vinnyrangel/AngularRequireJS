(function(){
	'use strict';

	require.config({
		paths: {
			'app': '/scripts/app',
			'routes': '/scripts/routes',
			'aboutController': '/scripts/aboutController',
			'contactController': '/scripts/contactController'
		}
	});

	require(['app'], function(){
			angular.bootstrap(document, ['app']);
		}
	);
}());
