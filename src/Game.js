class Game {
  constructor() {
  this.scoreboard = [
                     ["1","2","3"],
                     ["4","5","6"],
                     ["7","8","9"]
                    ]
  this.turn = 0
  }

  addX(row, column) {
    if (this.spaceIsAvailable(row, column)) {
      this.scoreboard[row - 1][column - 1] = "X"
      this.turn += 1
    }
    if (this.turn === 9 || this.playerWon()) return "Game Over"
  }

  addO(row, column) {
    if (this.spaceIsAvailable(row, column)) {
      this.scoreboard[row - 1][column - 1] = "O"
      this.turn += 1
    }
    if (this.turn === 9 || this.playerWon()) return "Game Over"
  }

  spaceIsAvailable(row, column) {
    let chosen_space = this.scoreboard[row - 1][column - 1]
    return (chosen_space !== "X" && chosen_space !== "O") ? true : false
  }

  playerWon() {
    if (this.scoreboard[0][0] === this.scoreboard[0][1] &&
        this.scoreboard[0][1] === this.scoreboard[0][2]
      ) {
        return true
      } else {
        return false
    }
  }
}
module.exports = Game;
