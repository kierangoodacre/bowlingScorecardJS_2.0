describe ("Game", function(){

	var game;
	var frame;

	beforeEach(function(){
		game = new Game();
		frame = new Frame();
	});

	it("has no points when game is started", function(){
		expect(game.points).toEqual([]);
	});

	it("should be made up of ten frames", function(){
		expect(game.frames).toEqual(10);
	});


	it("points should be added over the number of frames", function(){
		frame.rackScore(4);
		frame.rackScore(4);
		game.receiveScore(frame);
		expect(game.points).toEqual([8]);
	});

});