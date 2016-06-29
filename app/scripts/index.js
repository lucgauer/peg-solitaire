'use strict';

// Jogo de resta um
(function () {
  // var pegSolitaire =

  // Tempo decorrido desde o inicio da partida em segundos
  var secondsElapsed = 0,
    timeElapsedEl = document.querySelector('.game-time-elapsed'),
    timeCounter = function () {
      secondsElapsed++;

      var time = '',
        seconds = secondsElapsed,
        minutes,
        hours = parseInt(seconds / (60 * 60));

      if (hours) {
        time += hours + 'h';
        seconds -= hours * 60 * 60;
      }

      minutes = parseInt(seconds / 60);

      if (minutes) {
        time += minutes + 'min';
        seconds -= minutes * 60;
      }

      time += seconds + 's';

      timeElapsedEl.innerHTML = time;
    };

  window.setInterval(timeCounter, 1000);
})();
