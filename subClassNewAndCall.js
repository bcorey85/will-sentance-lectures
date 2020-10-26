function userCreator(name, score) {
	this.name = name;
	this.score = score;
}

userCreator.prototype.increment = function() {
	this.score++;
	console.log(this.score);
};

const user1 = new userCreator('Phil', 5);
user1.increment();

function paidUserCreator(paidName, paidScore, accountBalance) {
	// userCreator normally called with new, so manually binding value of userCreator 'this' to paidUserCreator 'this'
	// no need to return 'this' from userCreator, because has side effect of adding values to paidUserCreator 'this'
	userCreator.call(this, paidName, paidScore);
	this.accountBalance = accountBalance;
}

// Manually overwriting paidUserCreator prototype instead of using setPrototypeOf, both valid
paidUserCreator.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.increaseBalance = function() {
	this.accountBalance++;
	console.log(this.accountBalance);
};

const paidUser1 = new paidUserCreator('Alyssa', 8, 25);
paidUser1.increaseBalance();
paidUser1.increment();
