/********************* 04_NUMBERS_MATH-OBJECT *****************************/

/**
 * Simple Math
 */
const num1 = 100;
const num2 = 71;

const sum = num1 + num1
console.log(`Sum of ${num1} and ${num2} is ${sum}`);
const sub = num1 - num1
console.log(`Subtraction of ${num1} and ${num2} is ${sub}`);
const mult = num1 * num1
console.log(`Multiplication of ${num1} and ${num2} is ${mult}`);
const div = num1 / num1
console.log(`Division of ${num1} and ${num2} is ${div}`);
const mod = num1 % num2;
console.log(`Mod of ${num1} and ${num2} is ${mod}`);

/**
 * Math Object
 */

console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(2.4))
console.log(Math.ceil(2.4));
console.log(Math.floor(2.8));
console.log(Math.sqrt(676));
console.log(Math.abs(-3));
console.log(Math.pow(8, 2));
console.log(Math.min(2, 33, 4, 1, 55, 6, 3, -2));
console.log(Math.max(2, 33, 4, 1, 55, 6, 3, -2));
console.log(Math.random());
/**
 * @GOTCHA
 * "Math.random()" generate random number between 0 and 1
 */