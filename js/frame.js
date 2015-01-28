var Frame = function (){
	this.score = 0;
	this.throwCount = 2;
};

Frame.prototype.rackScore = function (pinsKnockedDown){
	this.score += pinsKnockedDown;
	this.throwCount -= 1;

	if (this.throwCount === 0){
		this.resetThrowCount()
	}

};

Frame.prototype.resetThrowCount = function (){
	this.throwCount = 2;
};

