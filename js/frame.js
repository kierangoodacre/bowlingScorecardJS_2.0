var Frame = function (){
	this.score = [];
	this.throwCount = 2;
	this.strike = false;
	this.spare = false;
};

Frame.prototype.rackScore = function (pinsKnockedDown){
	this.score.push(pinsKnockedDown);
	this.throwCount -= 1;
	var total = this.score.reduce(function(a, b) { return a + b; }, 0)

	if(this.score[0] === 10 && this.throwCount === 1){
		this.isStrike();
		this.score.push(0);
		this.throwCount -= 1;
	}
	else if (total === 10){
		this.isSpare();
	}
};

Frame.prototype.resetThrowCount = function (){
	this.throwCount = 2;
	this.score = [];
};

// think about not setting booleans - if you were to use them, maybe group them: this.bonus = 'strike', or this.bonus = 'spare'
Frame.prototype.isStrike = function (){
	this.strike = true;
};

Frame.prototype.isSpare = function (){
	this.spare = true;
};


