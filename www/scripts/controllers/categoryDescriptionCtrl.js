"use strict";

angular.module('codeQuiz')
  .controller('CategoryDescriptionCtrl', function ($scope, $routeParams, $sce, DataHolderService, GameInstanceService) {
    $scope.category = $routeParams.category;
    GameInstanceService.createGameFor($routeParams.category);
    $scope.description = $sce.trustAsHtml(DataHolderService.getDescriptionFor($routeParams.category));
  });