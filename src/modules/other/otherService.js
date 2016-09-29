angular.module( 'otherModule' ).service( 'otherService', [ '$window', function($window) {
  this.sayHello = function sayHello() {
    $window.alert('Hello from otherService');
  };
} ] );
