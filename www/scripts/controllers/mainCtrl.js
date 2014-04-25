"use strict";

angular.module('codeQuiz')
  .controller('MainCtrl', function ($scope, DataHolderService) {
    $scope.animationOptions.animationClass = '';
    $scope.categories = DataHolderService.getCategories();
  });