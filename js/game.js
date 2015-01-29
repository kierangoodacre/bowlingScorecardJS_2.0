var Game = function(){
	this.frames = 10
	this.pointsTally = []
};

Game.prototype.receiveScore = function(frame) {
	if(frame.throwCount === 0){
	this.pointsTally.push(frame.score)
	}
	else {
		throw "Not the end of frame";
	}
};

