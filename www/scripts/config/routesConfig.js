"use strict";


angular.module('codeQuiz')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'views/MainView.html'
      })
      .when('/welcome', {
        controller: 'WelcomeCtrl',
        templateUrl: 'views/WelcomeView.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });