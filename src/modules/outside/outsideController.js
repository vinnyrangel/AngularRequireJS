angular.module( 'outsideModule' ).controller( 'outsideController', [ 'outsideService', function(outsideService) {
  outsideService.sayHello();
} ] );
