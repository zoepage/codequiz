'use strict';

angular.module('codeQuiz')
  .controller('SignUpCtrl', function ($scope) {
    $scope.animationOptions.backgroundClass = $scope.action = "signUp";
    $scope.actionFn = function (user, pass) {
      $scope.userAction.signUp(user, pass)
        .then(undefined, function (hoodieError) {
          $scope.signForm.$error.message = hoodieError.message;
        });
    };
  });
