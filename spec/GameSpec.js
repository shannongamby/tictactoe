'use strict';

describe("Game", () => {
  const Game = require('../src/Game');
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("adds an X to a specific co-ordinate", () => {
    game.addX(1,1)
    expect(game.scoreboard[0][0]).toEqual('X')
  });

  it("adds an O to a specific co-ordinate", () => {
    game.addO(3,3)
    expect(game.scoreboard[2][2]).toEqual('O')
  });

  it("doesn't allow addition of O if X already present", () => {
    game.addX(2,2)
    game.addO(2,2)
    expect(game.scoreboard[1][1]).toEqual('X')
  });

  it("doesn't allow addition of X if O already present", () => {
    game.addO(2,2)
    game.addX(2,2)
    expect(game.scoreboard[1][1]).toEqual('O')
  });

  it("stops the game after 9 turns", () => {
    game.turn = 8
    expect(game.addO(1,1)).toEqual("Game Over")
  });

  it("stops the game when someone wins", () => {
    game.addX(1,1)
    game.addX(1,2)
    expect(game.addX(1,3)).toEqual("Game Over")
  });

});
