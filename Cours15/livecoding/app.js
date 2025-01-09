"use strict"

// const YEAR = 2025;

// const Person = function(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.ageIn2050 = function() {
//     return this.age + (2050 - YEAR); 
// }

// const Student = function(name, age, major) {
//     Person.call(this, name, age);
//     this.major = major;
// }


// Object.assign(Student.prototype, Person.prototype);


// Student.prototype.eatPasta = function() {
//     return `I am sick of Spaghetti, let's instead eat the RICHHH!!!`;
// }


// const cedric = new Student("Cedric", 20, "IM");
// const daniel = new Person("Daniel", 54);

// const people = [];

// class Person {

//     static species = "Home Sapiens";

//     constructor(name, age) {
//         this._name = name;
//         this.age = age;
//     }

//     static async generate() {
//         const response = await fetch(`https://randomuser.me/api`);
//         const { results } = await response.json()
//         const data = results[0];
//         // console.log(data);
//         return new Person(`${data.name.first} ${data.name.last}`, data.dob.age);
//     }

//     get ageIn2050() {
//         return this.age + 25;
//     }

//     set _name(userInput) {
//         if(userInput.includes(" ")) this.name = userInput;
//         else console.error(`${userInput} is not a full name`);
//     }

//     calculateAgeIn2050() {
//         return this.age + 25;
//     }
// }

// class Student extends Person {
//     constructor(name, age, major) {
//         super(name, age);
//         this.major = major;
//     }

//     eatPasta() {
//         return `I am sick of Spaghetti, let's instead eat the RICHHH!!!`;
//     }

//     get ageIn2050() {
//         return `${this.name} will be ${this.age + 25} in 2050`;
//     }
// }

// Person.generate().then(person => {
//     people.push(person)
// });




// Person.prototype.greet = function() {
//     return `Hello! My name is ${this.name}`
// }

// for(let i = 0; i <= 10; i++) {
//     people.push(new Person(`anna${i}`, i));
// }

// const anna = new Person("Anna Anderson", 39);
// const bijan = new Student("Bijan Bell", 23);


class Account {
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    deposit(amount) {
        this.#movements.push(amount);
    }

    withdraw(amount) {
        this.deposit(-amount);
    }

    #approveLoan() {
        return Math.random() >= 0.5 ? true : false;
    }

    requestLoan(amount) {
        if (this.#approveLoan()) this.deposit(amount);
        else console.log("No way, you are too poor.")
    }
}

const account1 = new Account("Anna", "CHF", 1234);

account1.#approveLoan();


// account1.#movements.push(1000000000000000)