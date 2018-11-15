'use strict';

function Game() {
  this.scoreboard = [
                     ["1","2","3"],
                     ["4","5","6"],
                     ["7","8","9"]
                    ]
  this.turn = 0
}

Game.prototype.addX = function(row, column) {
  if (this.spaceIsAvailable(row, column)) {
    this.scoreboard[row - 1][column - 1] = "X"
    this.turn += 1
  }
  if (this.turn === 9) return "Game Over"
}

Game.prototype.addO = function(row, column) {
  if (this.spaceIsAvailable(row, column)) {
    this.scoreboard[row - 1][column - 1] = "O"
    this.turn += 1
  }
  if (this.turn === 9) return "Game Over"
}

Game.prototype.spaceIsAvailable = function(row, column) {
  let choice = this.scoreboard[row - 1][column - 1]
  return (choice !== "X" && choice !== "O") ? true : false
}
