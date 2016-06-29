'use strict';

// TODO tratar erros
// Jogo de resta um
(function () {

  // Prototipos
  function Board () {
    this.holes = [];
  }

  function Hole () {
    this.top;
    this.right;
    this.bottom;
    this.left;
  }

  function Peg () {
    /**
     * @return boolean Validade do movimento
     */
    this.move = function () {};
  }

  var playing = false;

  // Tempo decorrido desde o inicio da partida em segundos
  var secondsElapsed = 0,
    timeElapsedEl = document.querySelector('.game-time-elapsed'),
    timer,
    timerDisplay = function () {
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

  var play = function () {
    if (playing) return;

    timer = window.setInterval(timerDisplay, 1000);

      gamePlayEl.style.display = 'none';
      gameRestartEl.style.display = 'inline-block';

    playing = true;
  },
    restart = function () {
      gamePlayEl.style.display = 'inline-block';
      gameRestartEl.style.display = 'none';

      window.clearInterval(timer);
      timeElapsedEl.innerHTML = '';
      secondsElapsed = 0;

      playing = false;
    },
    gamePlayEl = document.querySelector('.game-play'),
    gameRestartEl = document.querySelector('.game-restart');

  gamePlayEl.addEventListener('click', play);
  gameRestartEl.addEventListener('click', restart);
})();
