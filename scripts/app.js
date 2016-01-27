define('app', ['angular', 'uiRouter', 'routes', 'aboutController', 'contactController'],
	function(angular, uiRouter, routes, aboutController, contactController){
	'use strict';

	var app = angular.module('app', ['ui.router']);
	app.config(routes);
	app.controller('aboutController', aboutController);
	app.controller('contactController', contactController);
});
