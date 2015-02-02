var Frame = function (){
	this.score = [];
	this.throwCount = 2;
};

Frame.prototype.rackScore = function (pinsKnockedDown){
	this.score.push(pinsKnockedDown);
	this.throwCount -= 1;
	var total = this.score.reduce(function(a, b) { return a + b; }, 0)

	if(this.score[0] === 10 && this.throwCount === 1){
		this.score.push(0);
		this.throwCount -= 1;
	}
};

Frame.prototype.resetThrowCount = function (){
	this.throwCount = 2;
	this.score = [];
};



