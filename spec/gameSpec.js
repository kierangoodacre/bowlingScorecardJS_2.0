describe ("Game", function(){

	var game;
	var frame;

	beforeEach(function(){
		game = new Game();
		frame = new Frame();
	});

		describe("Frame score", function(){

			it("Has no pointsTally when game is started", function(){
				expect(game.pointsTally).toEqual([]);
			});

			it("Should be made up of ten frames", function(){
				expect(game.frames).toEqual(10);
			});

			it("Should only be added when there are no throws left", function(){
				frame.rackScore(2);
				expect(game.pointsTally).toEqual([]);
				frame.rackScore(2);
				game.receiveScore(frame);
				expect(game.pointsTally).toEqual([4]);
			});

			it("Points should be added over the number of frames", function(){
				frame.rackScore(4);
				frame.rackScore(4);
				game.receiveScore(frame);
				expect(game.pointsTally).toEqual([8]);
			});

		});

});