"use strict";

// TODO: Improve this hacky stuff :)
// Run special welcome animation only on first screen
// Best way to do this here?
angular.module('codeQuiz')
  .directive('welcomeAnimation', function ($animate, $timeout) {
    return {
      link: function (scope, elem) {
        $animate.addClass(elem.parent(), 'welcomeAnimation');

        scope.$on('$destroy', function () {
          $timeout(function () {
            $animate.removeClass(elem.parent(), 'welcomeAnimation');
          },5000);

        });
      }
    }

  });