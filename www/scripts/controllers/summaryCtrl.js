'use strict';

angular.module("codeQuiz")
  .controller("SummaryCtrl", function ($scope, $location, $routeParams, GameInstanceService) {
    $scope.tasks = GameInstanceService.getGame($routeParams.category);
    $scope.results = GameInstanceService.getResults();
  });