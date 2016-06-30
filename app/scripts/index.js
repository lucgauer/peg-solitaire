'use strict';

// Jogo de resta um
(function () {

  // Prototipos

  /**
   * Cria a casa referenciando as casas diretas no tabuleiro.
   * @constructor
   * @param {Hole} t Casa acima
   * @param {Hole} r Casa a direita
   * @param {Hole} b Casa abaixo
   * @param {Hole} l Casa a esquerda
   */
  function Hole (t, r, b, l, p) {
    this.top = t;
    this.right = r;
    this.bottom = b;
    this.left = l;
    this.peg = p;
  }

  function Peg () {
    /**
     * @return boolean Validade do movimento
     */
    this.move = function () {};
  }

  /**
   * Cria o tabuleiro ingles de resta um.
   * @constructor
   */
  function PegSolitaireBoard () {
    this.holes = [];

    // Estrutura linha -> casas por linha
    var holesPerRow = {
      1: 3,
      2: 3,
      3: 7,
      4: 7,
      5: 7,
      6: 3,
      7: 3
    };
    var holesQt = (function () {
      var qt = 0;

      for (var i in holesPerRow) {
        qt += holesPerRow[i];
      }

      return qt;
    })();

    // Criando as casas
    for (var c = 1; c <= holesQt; c++) {
      this.holes.push(new Hole(undefined, undefined, undefined, undefined, new Peg()));
    }

    // Relacionando as casas
    var rowRelate = function (rowIndexes, board) {
      for (var c = 0; c < rowIndexes.length - 1; c++) {
        board.holes[rowIndexes[c]].right = board.holes[rowIndexes[c + 1]];
        board.holes[rowIndexes[c + 1]].left = board.holes[rowIndexes[c]];
      }
    };
    var colRelate = function (rowIndexes, board) {
      for (var c = 0; c < rowIndexes.length - 1; c++) {
        board.holes[rowIndexes[c]].bottom = board.holes[rowIndexes[c + 1]];
        board.holes[rowIndexes[c + 1]].top = board.holes[rowIndexes[c]];
      }
    };

    rowRelate([0, 1, 2], this);
    rowRelate([3, 4, 5], this);
    rowRelate([6, 7, 8, 9, 10, 11, 12], this);
    rowRelate([13, 14, 15, 16, 17, 18, 19], this);
    rowRelate([20, 21, 22, 23, 24, 25, 26], this);
    rowRelate([27, 28, 29], this);
    rowRelate([30, 31, 32], this);

    colRelate([6, 13, 20], this);
    colRelate([7, 14, 21], this);
    colRelate([0, 3, 8, 15, 22, 27, 30], this);
    colRelate([1, 4, 9, 16, 23, 28, 31], this);
    colRelate([2, 5, 10, 17, 24, 29, 32], this);
    colRelate([11, 18, 25], this);
    colRelate([12, 19, 26], this);
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

    var psBoard = new PegSolitaireBoard();

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
