var Game = function(){
	this.frames = [];

	for (i = 0; i < 10; i++){
		this.frames.push(new Frame)};

	this.pointsTally = [];
};

Game.prototype.receiveScore = function(frame) {
	if (this.pointsTally[this.pointsTally.length-2] === 10){
		this._removeFrameFromGame();
		this._addStrikeBonusPoints(frame);
		this._addToPointsTally(frame);
	} else if (this.sparePoints() === 10){
		this._removeFrameFromGame();
		this._addToPointsTally(frame); 
		this._spareBonusPoint();
	} else if(this._isEndOfFrame(frame)){
		this._removeFrameFromGame();
		this._addToPointsTally(frame);
	} else {
		throw "Not the end of frame";
	}
};

Game.prototype.sparePoints = function(){
	return this.pointsTally.slice(-2).reduce(this._addPoints, 0)
	
};

//private
Game.prototype._spareBonusPoint = function() {
	this.pointsTally[this.pointsTally.length-3] = (this.pointsTally[this.pointsTally.length-3] + this.pointsTally[this.pointsTally.length-2])
};

Game.prototype._isEndOfFrame = function(frame) {
	return frame.throwCount === 0
};

Game.prototype._addPoints = function(a, b){
	return a + b
};

Game.prototype._addStrikeBonusPoints = function(frame){
	this.pointsTally[this.pointsTally.indexOf(10)] = (frame.score.reduce(this._addPoints) + 10);
};

Game.prototype._removeFrameFromGame = function(){
	this.frames.pop();
};

Game.prototype._addToPointsTally = function(frame){
	this.pointsTally = this.pointsTally.concat(frame.score)
};

