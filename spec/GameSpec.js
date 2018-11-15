'use strict';

describe("Game", function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it("adds an X to a specific co-ordinate", function() {
    game.addX(1,1)
    expect(game.scoreboard[0][0]).toEqual('X')
  });

  it("adds an O to a specific co-ordinate", function() {
    game.addO(3,3)
    expect(game.scoreboard[2][2]).toEqual('O')
  });

  it("doesn't allow addition of O if X already present", function() {
    game.addX(2,2)
    game.addO(2,2)
    expect(game.scoreboard[1][1]).toEqual('X')
  });

  it("doesn't allow addition of X if O already present", function() {
    game.addO(2,2)
    game.addX(2,2)
    expect(game.scoreboard[1][1]).toEqual('O')
  });

  it("stops the game after 9 turns", function() {
    game.turn = 8
    expect(game.addO(1,1)).toEqual("Game Over")
  });

});
