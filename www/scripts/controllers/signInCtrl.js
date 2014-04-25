'use strict';

angular.module('codeQuiz')
  .controller('SignInCtrl', function ($scope, hoodieAccount, $location) {
    $scope.action = "signIn";
    $scope.class = "signIn";
    $scope.animationOptions.animationClass = 'signAnimation';
    $scope.animationOptions.backgroundClass = 'signIn';
    $scope.actionFn = function (user, pass) {
      hoodieAccount.signIn(user, pass)
        .then(function () {
          $location.path('/game');
        }, function (error) {
          $scope.signForm.$error.message = error.message;
        });
    };
  });
