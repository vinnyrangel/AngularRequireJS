(function(){
	'use strict';

	require.config({
		paths: {
			'angular': '/bower_components/angular/angular.min',
			'uiRouter': '/bower_components/angular-ui-router/release/angular-ui-router.min',
			'app': '/scripts/app',
			'routes': '/scripts/routes',
			'aboutController': '/scripts/aboutController',
			'contactController': '/scripts/contactController'
		},
		shim: {
			'angular': {
				exports : 'angular'
			},
			'uiRouter': {
				deps: ['angular']
			}
		},
		deps: ['app']
	});

	require(['angular', 'app'], function(angular, app){
			angular.bootstrap(document, ['app']);
		}
	);
}());
