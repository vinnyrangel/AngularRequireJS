define('app', ['routes', 'aboutController', 'contactController'], function(routes, aboutController, contactController){
	'use strict';

	var app = angular.module('app', ['ui.router.state']);
	app.config(routes);
	app.controller('aboutController', aboutController);
	app.controller('contactController', contactController);
});
