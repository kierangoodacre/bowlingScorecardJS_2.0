var Frame = function (){
	this.score = 0;
	this.throwCount = 2;
	this.strike = false;
};

Frame.prototype.rackScore = function (pinsKnockedDown){
	this.score += pinsKnockedDown;
	this.throwCount -= 1;

	if(pinsKnockedDown === 10){
		this.throwCount -= 1
	}
};

Frame.prototype.resetThrowCount = function (){
	this.throwCount = 2;
	this.score = 0;
};

