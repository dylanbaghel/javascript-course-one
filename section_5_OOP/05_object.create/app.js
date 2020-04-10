/**
 * Object.create()
 *  --> Alternative Way of Creating Objects
 */
const personPrototypes = {
    greeting: function () {
        return `Hello, ${this.firstName} ${this.lastName}`;
    },
    setLastName: function (lastName) {
        this.lastName = lastName;
    }
};

const abhi = Object.create(personPrototypes);
abhi.firstName = 'Abhishek';
abhi.lastName = 'Baghel';
abhi.age = 21;
console.log(abhi);
console.log(abhi.greeting());

abhi.setLastName('Pal');
console.log(abhi.greeting());


// Different Syntax To Use The Above Technique
const dylan = Object.create(personPrototypes, {
    firstName: { value: 'Abhishek' },
    lastName: { value: 'Baghel' },
    age: { value: 18 }
});
console.log(dylan);
console.log(dylan.greeting());