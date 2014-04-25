"use strict";

angular.module('codeQuiz')
  .directive('animation', function () {
    return {
      link: function (scope,elem,attrs) {
        var animationClass = scope.animationOptions.animationClass;
        scope.animationOptions.animationClass = attrs.animation;

        scope.$on('$destroy', function () {
          scope.animationOptions.animationClass = animationClass;
        });
      }
    }

  });