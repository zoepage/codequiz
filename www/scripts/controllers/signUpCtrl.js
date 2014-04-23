'use strict';

angular.module('codeQuiz')
  .controller('SignUpCtrl', function ($scope, hoodieAccount, $location) {
    $scope.signUp = function(user, pass, pass2) {
      var passwordMatch = pass === pass2;
      if(passwordMatch) {
        hoodieAccount.signUp(user, pass)
          .then(function(username) {
            $location.path('/');
          });
      } else {
        alert('Hey, you have to type your password double');
      }
    };
  });
