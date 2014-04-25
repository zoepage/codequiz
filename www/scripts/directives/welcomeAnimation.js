"use strict";

angular.module('codeQuiz')
  .directive('welcomeAnimation', function () {
    return {
      link: function (scope) {
        var animationClass = scope.animationClass;
        scope.animationClass = 'welcomeAnimation'

        scope.$on('$destroy', function () {
          scope.animationClass = animationClass;
        });
      }
    }

  });