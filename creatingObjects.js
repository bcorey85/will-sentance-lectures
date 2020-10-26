// Not memory efficient, function created on every object
const userFactory = (name, score) => {
	return {
		name,
		score,
		increment: () => {
			score++;
			console.log(score);
		}
	};
};

// More memory efficient, but more verbose. Possible 'this' scoping issues if using arrow functions
const userFunctionStore = {
	increment: function() {
		this.score++;
		console.log(this.score);
	}
};

const userCreator = (name, score) => {
	const newUser = Object.create(userFunctionStore);
	newUser.name = name;
	newUser.score = score;
	return newUser;
};

// Usage with new keyword, more code efficient
function UserCreator(name, score) {
	this.name = name;
	this.score = score;
}

UserCreator.prototype.increment = function() {
	this.score++;
	console.log(this.score);
};

// Syntactic sugar, automatically setups up __proto__ link without having to explicitly write
class User {
	constructor(name, score) {
		this.name = name;
		this.score = score;
	}

	increment() {
		this.score++;
		console.log(this.score);
	}
}

const user1 = userFactory('test1', 5);
const user2 = userCreator('test2', 5);
const user3 = new UserCreator('test3', 5);
const user4 = new User('test4', 5);

user1.increment();
user2.increment();
user3.increment();
user4.increment();
