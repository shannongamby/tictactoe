'use strict';

function Game() {
  this.scoreboard = [
                     ["1","2","3"],
                     ["4","5","6"],
                     ["7","8","9"]
                    ]
}

Game.prototype.addX = function(row, column) {
  if (this.spaceIsAvailable(row, column)) {
    this.scoreboard[row - 1][column - 1] = "X"
  }
}

Game.prototype.addO = function(row, column) {
  if (this.spaceIsAvailable(row, column)) {
    this.scoreboard[row - 1][column - 1] = "O"
  }
}

Game.prototype.spaceIsAvailable = function(row, column) {
  let choice = this.scoreboard[row - 1][column - 1]
  if (choice === "X" || choice === "O") {
    return false
  } else {
    return true
  }
}
