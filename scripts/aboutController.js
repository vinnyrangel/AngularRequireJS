define('aboutController', [], function(){
	'use strict';

	function aboutCtrl($scope){
		$scope.message = 'state about';
	}

	aboutCtrl.$inject=['$scope'];

	return aboutCtrl;
});
