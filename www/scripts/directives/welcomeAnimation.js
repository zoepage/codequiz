"use strict";

angular.module('codeQuiz')
  .directive('welcomeAnimation', function () {
    return {
      link: function (scope) {
        var animationClass = scope.animationOptions.animationClass;
        scope.animationOptions.animationClass = 'welcomeAnimation'

        scope.$on('$destroy', function () {
          scope.animationOptions.animationClass = animationClass;
        });
      }
    }

  });