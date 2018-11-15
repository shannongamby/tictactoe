'use strict';

function Game() {
  this.scoreboard = [
                     ["1","2","3"],
                     ["4","5","6"],
                     ["7","8","9"]
                    ]
}

Game.prototype.x = function(row, column) {
  this.scoreboard[row - 1][column - 1] = 'X'
}

Game.prototype.o = function(row, column) {
  this.scoreboard[row - 1][column - 1] = 'O'
}
