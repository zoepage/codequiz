"use strict";

angular.module('codeQuiz')
  .controller('WelcomeCtrl', function ($scope, $location, $timeout) {
    $scope.$watch('signUp.clicked', function(clicked) {
      if(clicked) {
        $timeout(function(){$location.path('/signUp');}, 6000);
      }
    });
    $scope.$watch('signIn.clicked', function(clicked) {
      if(clicked) {
        $timeout(function(){$location.path('/signIn');}, 6000);
      }
    });
  });