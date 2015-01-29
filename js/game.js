var Game = function(){
	this.frames = 10
	this.points = []
};

Game.prototype.receiveScore = function(frame) {
	this.points.push(frame.score)
};

