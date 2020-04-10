/**
 * Prototypes
 *  --> All JavaScript objects inherit properties and methods from a prototype.
    --> Object.prototype
 */

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    // this.calculateAge = function () {
    //     return new Date().getFullYear() - this.dob.getFullYear();
    // }
}

// Calculate Age
Person.prototype.calculateAge = function () {
    return new Date().getFullYear() - this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Set Last Name
Person.prototype.setLastName = function (lastName) {
    this.lastName = lastName;
}

const abhi = new Person('Abhishek', 'Baghel', '06-06-1998');
const bittu = new Person('Bittu', 'Baghel', '14-24-1992');

console.log(abhi);
console.log(abhi.calculateAge());
console.log(bittu);
console.log(bittu.getFullName());
bittu.setLastName('Paul');
console.log(bittu.getFullName());

// hasOwnProperty() --> Check Object For The Property
console.log(bittu.hasOwnProperty('firstName'));