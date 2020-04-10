/**
 * ES6 Classes
 *  --> Syntatic Sugar On Top of Prototypes and Constructors.
 */

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return new Date().getFullYear() - this.dob.getFullYear();
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    static classMethod() {
        return 'This is a class Method';
    }
}

const abhi = new Person('Abhishek', 'Baghel', '06-06-1998');
console.log(abhi);
abhi.setLastName('Pal');
console.log(abhi);

console.log(Person.classMethod());