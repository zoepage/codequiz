"use strict";

angular.module('codeQuiz')
  .controller('SpecialAnimationCtrl', function ($scope, $location) {

    // Run special welcome animation only on first screen
    // Best way to do this here?
    $scope.$on('$locationChangeSuccess', function () {
      var path = $location.path();
      if (path === '/welcome') {
        $scope.additionalClass = 'welcomeAnimation'
      }
      else {
        $scope.additionalClass = undefined;
      }
    });
  });