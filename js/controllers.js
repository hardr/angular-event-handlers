(function() {
  'use strict';

  console.log('insanity, check');

  var app = angular.module('eventHandlerApp');

  app.controller('ReverseCtrl', function() {

    this.word;
    this.reversedWord;

    this.reverseWord = function(word) {
      this.reversedWord = this.word.split("").reverse().join("");
    };

  });

  app.controller('PingPongCtrl', function() {

    this.scoreOne = 0;
    this.scoreTwo = 0;
    this.winsOne = 0;
    this.winsTwo = 0;
    this.gameOver = false;
    this.serve = 1;

    this.addPoint = (player) => {
      if (player === "one" && this.scoreOne < 11 && this.scoreTwo < 11) {
        this.scoreOne += 1;
      } else if (player === "two" && this.scoreTwo < 11 && this.scoreOne < 11){
        this.scoreTwo += 1;
      }

      if (!((this.scoreOne + this.scoreTwo) % 2)) {
        if (this.serve === 1) {
          this.serve = 0;
        } else {
          this.serve = 1;
        }
      }

      if (!this.gameOver) {
        if (player === "one" && this.scoreOne === 11) {
          this.winsOne++;
          this.gameOver = true;
        } else if (player === "two" && this.scoreTwo === 11) {
          this.winsTwo++;
          this.gameOver = true;
        }
      }
    };

    this.reset = function() {
      this.scoreOne = 0;
      this.scoreTwo = 0;
      this.gameOver = false;
    };

    this.countEvents = function() {

    };

  });

})();
