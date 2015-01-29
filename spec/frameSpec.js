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

		// it("Resets after two throws", function(){
		// 	frame.rackScore(8);
		// 	frame.rackScore(2);
		// 	expect(frame.throwCount).toEqual(2);
		// 	expect(frame.score).toEqual(0);
		// });

		it("If 10 pins are knocked down on first throw, end of frame", function(){
			frame.rackScore(10);
			expect(frame.throwCount).toEqual(0);
			expect(frame.score).toEqual(10);
		});

	}); 

	describe("Strike", function(){

		it("it should be initialized as not a strike", function(){
			expect(frame.strike).toBe(false);
		});

	});

});