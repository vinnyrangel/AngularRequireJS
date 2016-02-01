(function(){
	'use strict';

	require.config({
		paths: {
			'angular': '/bower_components/angular/angular.min',
			'angularAMD': '/bower_components/angularAMD/angularAMD',
			'uiRouter': '/bower_components/angular-ui-router/release/angular-ui-router.min',

			'app': '/app/app',
			'routes': '/app/routes',
			'aboutController': '/app/controllers/aboutController',
			'contactController': '/app/controllers/contactController'
		},
		shim: {
			'angular': {
				exports: 'angular'
			},
			'angularAMD': {
				exports: 'angularAMD',
				deps: ['angular']
			},
			'uiRouter': {
				deps: ['angular']
			}
		},
		deps: ['app']
	});
}());
