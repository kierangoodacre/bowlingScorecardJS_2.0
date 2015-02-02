var Game = function(){
	this.frames = [];

	for (i = 0; i < 10; i++){
		this.frames.push(new Frame)};

	this.pointsTally = [];
};

Game.prototype.receiveScore = function(frame) {
	if (frame.throwCount === 0 && frame.strike === true){
		this.frames.pop();
		this.pointsTally = this.pointsTally.concat(frame.score)
		// return this.strikePoints()
	}
	else if(frame.throwCount === 0){
		this.frames.pop();
		this.pointsTally = this.pointsTally.concat(frame.score)
	}
	else {
		throw "Not the end of frame";
	}
};

// Game.prototype.strikePoints = function() {
// 	var strikeAdd = this.pointsTally.slice(0,2).reduce(add, 0);
// 	this.pointsTally[0] = strikeAdd
// 	function add(a, b) {
//     return a + b;
// 	}
// };
