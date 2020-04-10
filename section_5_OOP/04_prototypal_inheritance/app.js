/**
 * Prototypal Inheritance
 */

// Parent
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function () {
    return `Hello, ${this.firstName} ${this.lastName}`;
}

const person = new Person('Abhishek', 'Baghel');
console.log(person.greeting());

// Child
function Blogger(firstName, lastName, category) {
    Person.call(this, firstName, lastName);

    this.category = category;
}

// By Default Child Constructor Does not inherit Parent's Protoype - Use Code Below To Inherit Prototype.
Blogger.prototype = Object.create(Person.prototype);
/**
 * @GOTCHA --> Child Contructor's '__proto__' refers to the Parent Class, to show the correct child class as this '__proto__.constructor' property, use code below
 */
Blogger.prototype.constructor = Blogger;

// Overriding Prototype Methods
Blogger.prototype.greeting = function () {
    return `Hello, I'm ${this.firstName} ${this.lastName}, and I'm a blogger who writes about ${this.category}`
}

const blogger1 = new Blogger('Dylan', 'Baghel', 'Technology');
console.log(blogger1);
console.log(blogger1.greeting());