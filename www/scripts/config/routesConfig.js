"use strict";


angular.module('codeQuiz')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/WelcomeView.html'
      })
      .when('/welcome/signIn', {
        controller: 'SignInCtrl',
        templateUrl: 'views/SignInView.html'
      })
      .when('/welcome/signUp', {
        controller: 'SignUpCtrl',
        templateUrl: 'views/SignUpView.html'
      })
      .when('/game', {
        controller: 'MainCtrl',
        templateUrl: 'views/MainView.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  });