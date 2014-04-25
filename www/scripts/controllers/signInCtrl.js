'use strict';

angular.module('codeQuiz')
  .controller('SignInCtrl', function ($scope) {
    $scope.animationOptions.backgroundClass = $scope.action = "signIn";
    $scope.actionFn = function (user, pass) {
      $scope.userAction.signIn(user, pass)
        .then(undefined, function (hoodieError) {
          $scope.signForm.$error.message = hoodieError.message;
        })
    }
  });
