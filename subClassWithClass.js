class UserCreator {
	// creates 'this' object and assigns property values of arguments
	// automatically binds value of 'this' object to prototype of UserCreator
	constructor(name, score) {
		this.name = name;
		this.score = score;
	}

	// places following methods on the bound prototype of UserCreator, not the 'this' object
	increment() {
		this.score++;
		console.log(this.score);
	}
}

const user1 = new UserCreator('Phil', 5);

user1.increment();

class PaidUserCreator extends UserCreator {
	constructor(paidName, paidScore, accountBalance) {
		// calls base object constructor and sets 'this' equal to value returned
		super(paidName, paidScore);
		this.accountBalance = accountBalance;
	}

	increaseBalance() {
		this.accountBalance++;
		console.log(this.accountBalance);
	}
}

const paidUser1 = new PaidUserCreator('Alyssa', 8, 25);
paidUser1.increaseBalance();
paidUser1.increment();
