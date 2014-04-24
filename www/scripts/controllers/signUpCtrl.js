'use strict';

angular.module('codeQuiz')
  .controller('SignUpCtrl', function ($scope, hoodieAccount, $location) {
    $scope.signUp = function (user, pass) {
      hoodieAccount.signUp(user, pass)
        .then(function () {
          $location.path('/game');
        }, function (error) {
          $scope.signUpForm.$error.message = error.message;
        });
    };
  });
