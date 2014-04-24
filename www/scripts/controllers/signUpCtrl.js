'use strict';

angular.module('codeQuiz')
  .controller('SignUpCtrl', function ($scope, hoodieAccount, $location) {
    $scope.action = "Sign Up";
    $scope.actionFn = function (user, pass) {
      hoodieAccount.signUp(user, pass)
        .then(function () {
          $location.path('/game');
        }, function (error) {
          $scope.signForm.$error.message = error.message;
        });
    };
  });
