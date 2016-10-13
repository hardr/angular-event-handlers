(function() {
  'use strict';

  console.log('insanity, check');

  var app = angular.module('eventHandlerApp', []);

  app.filter('rating', function () {
    return function(input) {
      var rating = '';
      for (var i = 0; i < input; i++) {
        rating += '* ';
      }
      return rating;
    }
  });

})();
