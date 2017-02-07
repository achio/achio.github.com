class Student {
	fullName : string;
	constructor(public firstName, public middleName, public lastName){
		this.fullName = firstName + middleName + lastName;
	};
};

interface Person {
	firstName : string;
	lastName : string;
	fullName : string;
}

function greeter(person:Person){
	return "hello," + person.fullName;
}

var user = new Student("monkey ",". D ."," luffy");

console.log(greeter(user));