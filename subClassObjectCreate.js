function userCreator(name, score) {
	const newUser = Object.create(userFunctions);
	newUser.name = name;
	newUser.score = score;
	return newUser;
}

const userFunctions = {
	increment: function() {
		this.score++;
		console.log(this.score);
	}
};

const user1 = userCreator('Phil', 3);
user1.increment();

function paidUserCreator(paidName, paidScore, accountBalance) {
	const newPaidUser = userCreator(paidName, paidScore);
	// Prototype originally pointed to userFunctions, manually setting to paidUserFunctions
	Object.setPrototypeOf(newPaidUser, paidUserFunctions);
	newPaidUser.accountBalance = accountBalance;
	return newPaidUser;
}

const paidUserFunctions = {
	increaseBalance: function() {
		this.accountBalance++;
		console.log(this.accountBalance);
	}
};

// Manually set prototype of paidUserFunctions to userFunctions, gives paidUserCreator access to full scope chain
Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = paidUserCreator('Alyssa', 8, 25);
paidUser1.increaseBalance();
paidUser1.increment();
