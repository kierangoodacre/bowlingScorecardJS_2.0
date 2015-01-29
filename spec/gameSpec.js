describe ("Game", function(){

	var game;

	beforeEach(function(){
		game = new Game();
	});

	it("should be made up of ten frames", function(){
		expect(game.frames).toEqual(10)
	});

});