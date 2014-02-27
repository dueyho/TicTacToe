var Player = {
  initialize: function (symbol) {
    this.symbol = symbol;
  },
  createPlayer: function(symbol) {
    var player = Object.create(Player);
    player.initialize(symbol);
    return player;
  }
};

var Space = {
  initialize: function(xcoordinate,ycoordinate) {
    this.xcoordinate = xcoordinate;
    this.ycoordinate = ycoordinate;
  },
  createSpace: function(xcoordinate,ycoordinate) {
    var space = Object.create(Space);
    space.initialize(xcoordinate,ycoordinate);
    return space;
  },

  markBy: function(markedBy) {
    this.markedBy = markedBy; 
  } 
};

var Board = {

spaces: [],
createBoard: function() {
var board = Object.create(Board);
for (var i = 1; i < 4; i++) {
  for (var j = 1; j < 4; j++) {
    var space = Space.create(i,j);
    Board.spaces.push(space);
  }
}
  return board;
  }
};


