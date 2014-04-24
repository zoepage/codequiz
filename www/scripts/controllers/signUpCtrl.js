'use strict';

angular.module('codeQuiz')
  .controller('SignUpCtrl', function ($scope, hoodieAccount, $location) {
    $scope.signUp = function (user, pass) {
      console.log($scope.singUp);
      hoodieAccount.signUp(user, pass)
        .then(function (username) {
          $location.path('/game');
        }, function (error, promise) {
          console.log($scope.singUp)
        });
    };
  });
