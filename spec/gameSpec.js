describe ("Game", function(){

	var game;
	var frame;

	beforeEach(function(){
		game = new Game();
		frame = new Frame();
	});

function playHelper(frame, game){
	for (i = 0; i < 9; i++){
		frame.rackScore(4);
		frame.rackScore(4);
		game.receiveScore(frame);
		frame.resetThrowCount();
	};
}

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

		describe("Total Score", function(){

			it("Will be kept over the game", function(){
				playHelper(frame, game);
				expect(game.totalScore()).toEqual(72);
			});

		});

		describe("Frame objects", function(){

			it("Game will be made of 10", function(){
				expect(game.frames.length).toEqual(10)
			});

			it("Will be removed from game as frame is finished", function(){
				frame.rackScore(4);
				frame.rackScore(4);
				game.receiveScore(frame);
				expect(game.frames.length).toEqual(9)
			});

		});

		describe("Strike frame", function(){

			it("If role of 10 next frame added to that frame", function(){
				frame.rackScore(10);
				game.receiveScore(frame);
				frame.resetThrowCount();
				frame.rackScore(4);
				frame.rackScore(4);
				game.receiveScore(frame);
				expect(game.pointsTally).toEqual([18, 0, 4, 4])
			});

		});

		describe("Spare frame", function(){

			it("If frame total is 10 next throw added as bonuse to that frame", function(){
				frame.rackScore(5);
				frame.rackScore(5);
				game.receiveScore(frame);
				frame.resetThrowCount();
				frame.rackScore(3);
				frame.rackScore(5);
				game.receiveScore(frame);
				expect(game.pointsTally).toEqual([5, 8, 3, 5])
			});

		});

		// describe("10th Frame", function(){

		// 	it("If strike the next two rolls are added as normal", function(){
		// 		playHelper(frame, game);
		// 		frame.rackScore(10);
		// 		game.receiveScore(frame);
		// 		frame.resetThrowCount();
		// 		frame.rackScore(4);
		// 		frame.rackScore(4);
		// 		expect()
		// 	});

		// });

});