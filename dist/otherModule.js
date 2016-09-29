angular.module( 'otherModule', ['ngDialog'] );

angular.module( 'otherModule' ).controller( 'otherController', [ 'otherService', function(otherService) {
  otherService.sayHello();
} ] );

angular.module( 'otherModule' ).service( 'otherService', [ '$window', function($window) {
  this.sayHello = function sayHello() {
    $window.alert('Hello from otherService');
  };
} ] );
