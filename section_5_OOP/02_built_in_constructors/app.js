/**
 * Built-In Constructors
 */

/**
 * String
 */
const name = new String('Abhishek Baghel');
console.log(name);
name.foo = 'Bar';
console.log(name);

// Issue - As Object Instead of String (Primitive Type) and creates issue with comparison.
console.log(typeof name);

/**
 * Numbers
 */
const age = new Number(22);
console.log(age);

// Issue - As Object Instead of Number (Primitive Type) and creates issue with comparison.
console.log(typeof age);

/**
 * Boolean
 */
const isValid = new Boolean(true);
console.log(isValid);

// Issue - As Object Instead of Boolean (Primitive Type) and creates issue with comparison.
console.log(typeof isValid);

/**
 * Function
 */
const getSum = new Function('x', 'y', 'return x + y');
console.log(getSum(1, 2));

/**
 * Object
 */
const person = new Object({ name: 'Abhishek Baghel', age: 22 });
console.log(person);

/**
 * Arrays
 */
const list = new Array('Rice', 'Wheat', 'Pulses', 'Cardamom');
console.log(list);

/**
 * Regular Expressions
 */
const re1 = /\w+/;
console.log(re1);

// With This Way We Have To Escape Slashes
const re2 = new RegExp('\\w+');
console.log(re2);
