"use strict";

angular.module('codeQuiz')
  .controller('AccountCtrl', function ($scope, hoodieAccount, $location) {
    $scope.account = hoodieAccount;
    $scope.signOut = function() {
      hoodieAccount.signOut()
        .then(function() {
          $location.path('/');
        });
    };
  });