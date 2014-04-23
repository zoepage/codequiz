"use strict";

angular.module('codeQuiz')
  .run(function (hoodieAccount, $location) {
    if (angular.isUndefined(hoodieAccount.username)) {
      $location.path('/welcome');
    }
  });