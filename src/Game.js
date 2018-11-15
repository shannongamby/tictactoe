'use strict';

function Game() {
  this.scoreboard = [
                     ["1","2","3"],
                     ["4","5","6"],
                     ["7","8","9"]
                    ]
}

Game.prototype.addX = function(row, column) {
  let choice = this.scoreboard[row - 1][column - 1]
  if (choice === "O") {
    this.scoreboard[row - 1][column - 1] = "O"
  } else {
    this.scoreboard[row - 1][column - 1] = "X"
  }
}

Game.prototype.addO = function(row, column) {
  let choice = this.scoreboard[row - 1][column - 1]
  if (choice === "X") {
    this.scoreboard[row - 1][column - 1] = "X"
  } else {
    this.scoreboard[row - 1][column - 1] = "O"
  }
}
