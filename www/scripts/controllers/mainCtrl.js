"use strict";

angular.module('codeQuiz')
  .controller('MainCtrl', function ($scope, DataHolderService) {
    $scope.categories = DataHolderService.getCategories();
  });