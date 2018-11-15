'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("adds an X to a specific co-ordinate", function() {
    game.x(1,1)
    expect(game.scoreboard[0][0]).toEqual('X')
  });

  it("adds an O to a specific co-ordinate", function() {
    game.o(3,3)
    expect(game.scoreboard[2][2]).toEqual('O')
  });

});
