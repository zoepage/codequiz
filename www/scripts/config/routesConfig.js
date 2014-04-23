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
      .when('/signIn', {
        //controller: 'SignInCtrl',
        templateUrl: 'views/SignInView.html'
      })
      .when('/signUp', {
        //controller: 'SignInCtrl',
        templateUrl: 'views/SignUpView.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });