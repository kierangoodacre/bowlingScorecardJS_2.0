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

			it("Should only be added when there are no throws left", function(){
				frame.rackScore(2);
				expect(game.pointsTally).toEqual([]);
				frame.rackScore(2);
				game.receiveScore(frame);
				expect(game.pointsTally).toEqual([2, 2]);
			});

			it("Points should be added over the number of frames", function(){
				frame.rackScore(4);
				frame.rackScore(4);
				game.receiveScore(frame);
				frame.resetThrowCount();
				frame.rackScore(4);
				frame.rackScore(4);
				game.receiveScore(frame);
				expect(game.pointsTally).toEqual([4, 4, 4, 4]);
			});

		});

		describe("Frame objects", function(){

			it("should be made of 10", function(){
				expect(game.frames.length).toEqual(10)
			});

			it("should be removed as score is added", function(){
				frame.rackScore(4);
				frame.rackScore(4);
				game.receiveScore(frame);
				expect(game.frames.length).toEqual(9)
			});

		});

		// describe("Strike", function(){

		// 	it("if initialized the next frame is added to that frame", function(){
		// 		frame.rackScore(10);
		// 		game.receiveScore(frame);
		// 		frame.resetThrowCount();
		// 		game.rackScore(4);
		// 		game.rackScore(4);
		// 		game.receiveScore(frame);
		// 		frame.resetThrowCount();
		// 		expect(game.pointsTally).toEqual([10, 0, 4, 4]);
		// 	});

		// });

});