define(['angularAMD', 'routes', 'uiRouter', 'outsideModule', 'otherModule' ], function(angularAMD, routes){
	'use strict';
	var app = angular.module('app', ['ui.router', 'outsideModule', 'otherModule']);

	app.config(routes);

	return angularAMD.bootstrap(app);
});
