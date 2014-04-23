"use strict";

angular.module('codeQuiz')
  .controller('MainCtrl', function ($scope, hoodieAccount, $location) {
    // Check if user is logged in
    if (angular.isUndefined(hoodieAccount.username)) {
      // redirect to the signIn/signUp page
      $location.path('/welcome');
    }

    $scope.account = hoodieAccount;

  });