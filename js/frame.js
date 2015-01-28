var Frame = function (){
	this.score = 0;
	this.throwCount = 2;
};

Frame.prototype.rackScore = function (pinsKnockedDown){
	this.score += pinsKnockedDown;
	this.throwCount -= 1;
};

