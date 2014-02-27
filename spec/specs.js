describe("Player", function(){
  describe("initialize", function(){
    it("assigns a symbol to a player", function(){
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("createPlayer", function(){
    it("creates a new Player object", function() {
      var testPlayer = Player.createPlayer("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe('initialize', function() {
    it('should return a space by it coordinates', function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(2,3);
      testSpace.xcoordinate.should.equal(2);
      testSpace.ycoordinate.should.equal(3);
    });
  });
  describe("createSpace", function() {
    it("should create a new space", function() {
      var testSpace = Space.createSpace(2,3);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe('markBy', function() {
    it('lets a player mark a space', function() {
      var testSpace = Space.createSpace(2,3);
      var testPlayer = Player.createPlayer("X");
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function(){
  describe("createBoard", function(){
    it("creates 9 spaces when it is initialized",function(){
      var testBoard = Object.create(Board);
      
      Board.spaces.length.should.eql(9);
    });
  });
});

