/**
 * ES6 Inheritance
 *  --> Syntactic Sugar on Top of Prototypal Inheritance.
 */

//  Parent Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    repr() {
        return `I'm ${this.name} and i'm ${this.age} Year(s) Old.`;
    }
}

const person1 = new Person('Some Person', 11);
console.log(person1.repr());

// Sub Class
class Blogger extends Person {
    constructor(name, age, category) {
        super(name, age);
        this.category = category;
    }

    // Overriding
    repr() {
        return `I'm ${this.name} with ${this.age} of life experience. I'm a blogger who writes on ${this.category}`;
    }

    static getBloggingCost() {
        return 5000;
    }
}

const blogger1 = new Blogger('Dylan Baghel', 18, 'Technology');
console.log(blogger1);
console.log(blogger1.repr());

console.log(Blogger.getBloggingCost());

// Sub Class
class Traveller extends Person {
    constructor(name, age, countries, origin) {
        super(name, age);
        this.countries = countries;
        this.origin = origin
    }

    // Overriding
    repr() {
        return `${this.name} is ${this.age}, who is a traveller with ${this.countries} Countries visited but, belongs to ${this.origin}`;
    }
}

const traveller = new Traveller('Bittu Baghel', 21, 5, 'India');
console.log(traveller.repr());