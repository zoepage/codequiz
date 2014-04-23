"use strict";

angular.module('codeQuiz')
  .run(function (hoodieAccount, $location, hoodie) {
    window.hoodie = hoodie;
    if (angular.isUndefined(hoodieAccount.username)) {
      $location.path('/welcome');
    }
  });