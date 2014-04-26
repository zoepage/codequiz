"use strict";

angular.module('codeQuiz')
  .controller('AccountCtrl', function ($scope, hoodieAccount, $location, hoodieStore) {
    $scope.account = hoodieAccount;
    $scope.userAction = {
      signIn: function (user, pass) {
        return hoodieAccount.signIn(user, pass)
          .then(function () {
            $location.path('/game');
          });
      },
      signOut: function () {
        return  hoodieAccount.signOut()
          .then(function () {
            $location.path('/');
          });
      },
      signUp: function (user, pass) {
        return hoodieAccount.signUp(user, pass)
          .then(function () {
            $location.path('/game');
          });
      }
    };
    hoodieStore.findAll('results')
      .then(function(results){
        $scope.results = results;
      });
    //hoodieArray.bind($scope, 'results');
  });