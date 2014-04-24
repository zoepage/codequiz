'use strict';

angular.module('codeQuiz')
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push(function ($location, hoodieAccount) {
      return {
        'request': function (request) {
          if (!$location.path().match(/welcome/) && angular.isUndefined(hoodieAccount.username)) {
            $location.path('/');
          }
          if ($location.path() === '/' && angular.isDefined(hoodieAccount.username)) {
            $location.path('/game');
          }
          return request;
        }
      }
    });
  });