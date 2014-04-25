angular.module("codeQuiz")
    .controller("TaskCtrl", function ($scope, $routeParams, $location, $timeout, DataHolderService) {
        'use strict';
        var tasks = DataHolderService.getTasks();
        $scope.taskId = parseInt($routeParams.taskId, 10);
        $scope.task = tasks[$scope.taskId - 1];
        $scope.sumTasks = 10;//tasks.length;

        $scope.saveResult = function (result) {
            var results = DataHolderService.getResults();
            results[$scope.taskId - 1] = result;
            if ($scope.taskId < $scope.sumTasks) {
                $location.path("/game/" + ($scope.taskId + 1));
            } else {
                $location.path("/game/summary");
            }

        };

        $timeout(prettyPrint, 0);

    });