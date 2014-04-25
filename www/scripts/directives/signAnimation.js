"use strict";

angular.module('codeQuiz')
  .directive('signAnimation', function () {
    return {
      link: function (scope) {
        var animationClass = scope.animationOptions.animationClass;
        scope.animationOptions.animationClass = 'signAnimation'

        scope.$on('$destroy', function () {
          scope.animationOptions.animationClass = animationClass;
        });
      }
    }

  });