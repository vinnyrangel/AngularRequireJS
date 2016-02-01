define(['angularAMD', 'routes', 'uiRouter'], function(angularAMD, routes){
	'use strict';
	var app = angular.module('app', ['ui.router']);

	app.config(routes);

	return angularAMD.bootstrap(app);
});
