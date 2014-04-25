"use strict";

angular.module('codeQuiz')
  .controller('MainCtrl', function ($scope, hoodieAccount) {
    $scope.account = hoodieAccount;
    $scope.animationOptions.animationClass = '';
  });