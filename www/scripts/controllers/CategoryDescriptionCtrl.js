"use strict";

angular.module('codeQuiz')
  .controller('CategoryDescriptionCtrl', function ($scope, $routeParams,GameInstanceService) {

    GameInstanceService.createGameFor($routeParams.category);

    $scope.category = $routeParams.category;
  });