var Game = function(){
	this.frames = [];

	for (i = 0; i < 10; i++){
		this.frames.push(new Frame)};

	this.pointsTally = [];
};

Game.prototype.receiveScore = function(frame) {
	if (this.pointsTally[this.pointsTally.length-2] === 10){
		this.frames.pop();
		this.pointsTally[this.pointsTally.indexOf(10)] = (frame.score.reduce(add) + 10);
		this.pointsTally = this.pointsTally.concat(frame.score)
	} else if (this.sparePoints() === 10){
		this.frames.pop();
		this.pointsTally = this.pointsTally.concat(frame.score) 
		this._createSpare();
	} else if(this._isEndOfFrame(frame)){
		this.frames.pop();
		this.pointsTally = this.pointsTally.concat(frame.score)
	} else {
		throw "Not the end of frame";
	}
};

Game.prototype.sparePoints = function(){
	return this.pointsTally.slice(-2).reduce(add, 0)
	
};

//private
Game.prototype._createSpare = function() {
	this.pointsTally[this.pointsTally.length-3] = (this.pointsTally[this.pointsTally.length-3] + this.pointsTally[this.pointsTally.length-2])
}

Game.prototype._isEndOfFrame = function(frame) {
	return frame.throwCount === 0
}

//add it to Game.prototype? Or maybe move to a helpers file?

function add(a, b) {
		return a + b
	}

// Game.prototype.strikePoints = function(){
// 	if (this.pointsTally[this.pointsTally.length-2] === 10){
// 		this.strikePoints = true
// 	else
// 		false
// 	}
// 	function add(a, b){
// 		return a + b
// 	};
// };

// Game.prototype.strikePoints = function(frame) {
// 	this.pointsTally[this.pointsTally.indexOf(10)] = (frame.score.reduce(add, 0) + 10);
// 	function add(a, b) {
// 		return a + b;
// 	}
// };

	// var strikeAdd = this.pointsTally.slice(0,2).reduce(add, 0);
	// this.pointsTally[0] = strikeAdd
	// function add(a, b) {
 //    return a + b;
	// }
