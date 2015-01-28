describe ("Frame", function(){

	var frame;

	beforeEach(function(){
		frame = new Frame();
	});

	describe("Score", function(){

		it("Pins knocked down with throw equates to points gained", function(){
			frame.rackScore(10);
			expect(frame.score).toEqual(10);
		});

		it("Keeps a running score over the frame", function(){
			frame.rackScore(8);
			frame.rackScore(2);
			expect(frame.score).toEqual(10);
		});

	});

	describe("Throws", function(){

		it("Has a max of two throws in one frame ", function(){
			expect(frame.throwCount).toEqual(2);
			frame.rackScore(8);
			expect(frame.throwCount).toEqual(1);
		});

	}); 

});