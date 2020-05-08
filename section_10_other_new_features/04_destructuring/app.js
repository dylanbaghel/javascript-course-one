/**
 * Destructuring
 */

 /**
  * Array Destructuring
  */
const [name, age] = ['Abhishek', 20];
console.log(name, age);

const [fullName, dob, ...otherDetails] = ['Dylan', '06-06-1998', 'Male', 'AB+'];
console.log(fullName, dob, otherDetails);

/**
 * Object Destructuring
 */
const address = {
    state: 'MP',
    country: 'India',
    street: 'A7',
    landmark: 'New Big Tower',
    zipcode: '474010'
}

const { state, country, ...rest } = address;
console.log(state, country, rest);

/**
 * More Example
 */
for (let [key, value] of Object.entries(address)) {
    console.log(`${key}: ${value}`);
}