define('contactController', [], function(){
	'use strict';

	function contactCtrl($scope){
		$scope.message = 'state contact';
	}

	contactCtrl.$inject=['$scope'];

	return contactCtrl;
});
