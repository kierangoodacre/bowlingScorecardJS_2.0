var Frame = function (){
	this.score = 0;
	this.throwCount = 2;
	this.strike = false;
	this.spare = false;
};

Frame.prototype.rackScore = function (pinsKnockedDown){
	this.score += pinsKnockedDown;
	this.throwCount -= 1;

	if(pinsKnockedDown === 10 && this.throwCount === 1){
		this.isStrike();
		this.throwCount -= 1;
	}
	else if (this.score === 10){
		this.isSpare();
	}
};

Frame.prototype.resetThrowCount = function (){
	this.throwCount = 2;
	this.score = 0;
};

Frame.prototype.isStrike = function (){
	this.strike = true;
};

Frame.prototype.isSpare = function (){
	this.spare = true;
};

