"use strict";


angular.module('codeQuiz')
  .config(function (hoodieProvider) {
    hoodieProvider.url(location.origin);
  });