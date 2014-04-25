"use strict";


angular.module('codeQuiz')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/WelcomeView.html'
      })
      .when('/welcome/signIn', {
        controller: 'SignInCtrl',
        templateUrl: 'views/loginForm.html'
      })
      .when('/welcome/signUp', {
        controller: 'SignUpCtrl',
        templateUrl: 'views/loginForm.html'
      })
      .when('/game', {
        controller: 'MainCtrl',
        templateUrl: 'views/mainView.html'
      })
      .when("/game/summary", {
        templateUrl: "views/summaryView.html",
        controller: "SummaryCtrl"
      })
      .when("/game/:taskId", {
        templateUrl: "views/taskView.html",
        controller: "TaskCtrl"
      })
      .when('/account', {
        controller: 'AccountCtrl',
        templateUrl: 'views/accountView.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });