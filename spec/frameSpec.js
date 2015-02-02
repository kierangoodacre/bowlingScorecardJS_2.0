    describe ("Frame", function(){

	var frame;

	beforeEach(function(){
		frame = new Frame();
	});

	describe("Score", function(){

		it("Pins knocked down with throw equates to points gained", function(){
			frame.rackScore(10);
			expect(frame.score).toEqual([10, 0]);
		});

		it("Keeps a running score over the frame", function(){
			frame.rackScore(8);
			frame.rackScore(2);
			expect(frame.score).toEqual([8,2]);
		});

	});

	describe("Throws", function(){

		it("Has a max of two throws in one frame ", function(){
			expect(frame.throwCount).toEqual(2);
			frame.rackScore(8);
			expect(frame.throwCount).toEqual(1);
		});

		it("If 10 pins are knocked down on first throw, end of frame", function(){
			frame.rackScore(10);
			expect(frame.throwCount).toEqual(0);
			expect(frame.score).toEqual([10, 0]);
		});

	}); 

	describe("Strike", function(){

		it("It should not be initialized as a strike", function(){
			expect(frame.strike).toBe(false);
		});

		it("Should be initialized if 10 pins knocked down in one throw", function(){
			frame.rackScore(10);
			expect(frame.strike).toBe(true);
		});

	});

	describe("Spare", function(){

		it("It should not be intialized as a spare", function(){
			expect(frame.spare).toBe(false);
		});

		it("Should be intialized if 10 pins are knocked down in 2 throws", function(){
			frame.rackScore(6);
			frame.rackScore(4);
			expect(frame.spare).toBe(true);
			// expect(frame.strike).toBe(false);
		});

	});

});