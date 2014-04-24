'use strict';

angular.module('codeQuiz')
  .controller('SignInCtrl', function ($scope, hoodieAccount, $location) {
    $scope.signIn = function(user, pass) {
      hoodieAccount.signIn(user, pass)
        .then(function(username) {
          console.log(username);
          $location.path('/game');
        });
    };
  });
