'use strict';

angular.module("codeQuiz")
    .controller("SummaryCtrl", function ($scope, $location, DataHolderService) {

        $scope.tasks = DataHolderService.getTasks();
        $scope.results = DataHolderService.getResults();


    if (!$scope.results.length) {
            $location.path("/");
        }
    });