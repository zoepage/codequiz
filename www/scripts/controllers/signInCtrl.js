'use strict';

angular.module('codeQuiz')
  .controller('SignInCtrl', function ($scope, hoodieAccount, $location) {
    $scope.signIn = function(user, pass) {
      hoodieAccount.signIn(user, pass)
        .then(function() {
          $location.path('/game');
        }, function (error) {
          $scope.signInForm.$error.message = error.message;
        });
    };
  });
