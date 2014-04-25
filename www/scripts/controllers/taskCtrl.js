angular.module("codeQuiz")
  .controller("TaskCtrl", function ($scope, $routeParams, $location, $timeout, GameInstanceService) {
    'use strict';
    var tasks = GameInstanceService.getGame($routeParams.category);
    $scope.taskId = parseInt($routeParams.taskId, 10);
    $scope.task = tasks[$scope.taskId - 1];
    $scope.sumTasks = tasks.length;

    $scope.saveResult = function (result) {
      var results = GameInstanceService.getResults();
      results[$scope.taskId - 1] = result;
      if ($scope.taskId < $scope.sumTasks) {
        $location.path("/game/" + $routeParams.category + "/" + ($scope.taskId + 1));
      } else {
        $location.path("/game/" + $routeParams.category + "/summary");
      }

    };

    $timeout(prettyPrint, 0);

  });