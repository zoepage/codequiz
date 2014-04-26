angular.module("codeQuiz")
  .filter('eval', function () {
    return function (input) {
      if (/^if/.test(input)) {
        input = input.replace('if(', '').replace(')', '');
        input = 'new Boolean(' + input + ')';
      }
      return (input)?eval(input).toString():'undefined';
    };
  });