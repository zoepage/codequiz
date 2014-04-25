'use strict';

angular.module("codeQuiz")
  .factory("GameInstanceService", function (DataHolderService) {
    var tasks, results;

    function shuffle(o) { //v1.0
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    return {
      clearGame: function () {
        tasks = undefined;
        results = [];
      },
      createGameFor: function (category) {
        this.clearGame();
        tasks = shuffle(DataHolderService.getTasksFor(category));
        tasks.length = 10;
        return tasks;
      },
      getGame: function (category) {
        if (!tasks) {
          this.createGameFor(category);
        }
        return tasks;
      },
      finishGame: function () {
        this.clearGame();
        return tasks;
      },
      getResults: function () {
        return results;
      }
    };

  });