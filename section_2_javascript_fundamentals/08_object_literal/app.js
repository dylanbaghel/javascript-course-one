/********************* 08_OBJECTS *****************************/


const person = {
    firstName: 'Abhishek',
    lastName: 'Baghel',
    age: 21,
    email: 'abhi@gmail.com',
    hobbies: ['Maths', 'Programming'],
    address: {
        city: 'Gwalior',
        state: 'MP'
    },
    getAddress() {
        return `${this.address.city}, ${this.address.state}`
    }
};
console.log(person);

/**
 * Accessing Values
 * --> Two Ways
 */
console.log(person.firstName);
console.log(person['lastName']);

console.log(person.getAddress());
