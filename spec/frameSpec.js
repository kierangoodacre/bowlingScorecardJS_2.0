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
			expect(frame.score).toContain(10)
		});

	}); 

});