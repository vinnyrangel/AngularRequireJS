angular.module( 'outsideModule', [] );

angular.module( 'outsideModule' ).controller( 'outsideController', [ 'outsideService', function(outsideService) {
  outsideService.sayHello();
} ] );

angular.module( 'outsideModule' ).service( 'outsideService', [ '$window', function($window) {
  this.sayHello = function sayHello() {
    $window.alert('Hello from outsideService');
  };
} ] );
