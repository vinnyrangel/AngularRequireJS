angular.module( 'outsideModule' ).service( 'outsideService', [ '$window', function($window) {
  this.sayHello = function sayHello() {
    $window.alert('Hello from outsideService');
  };
} ] );
