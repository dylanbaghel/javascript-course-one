/********************* 05_STRINGS *****************************/

const firstName = 'Abhishek';
const lasName = 'Baghel';

/**
 * String Concatenation
 * --> Using '+' operator
 * --> Using `template literal`
 */

let fullName = firstName + ' ' + lasName;
console.log(fullName);
fullName = `${firstName} ${lasName}`;

/**
 * Appending
 */
let message = 'Hello';
message += ` ${fullName}`;
console.log(message);

/**
 * Escaping
 * '\'(BackSlash) - Escape The Special Power Of Character
 */
console.log('You\'re amazing !');

/**
 * Length Property of String
 */
console.log(fullName.length);

/**
 * concat() method of String
 */
console.log(firstName.concat(' ', lasName));

/**
 * toLowerCase() and toUpperCase()
 */
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

/**
 * Indexing
 */
console.log(fullName[2]);

/**
 * indexOf() and lastIndexOf()
 */
console.log(fullName.indexOf('h'));
console.log(fullName.lastIndexOf('h'));

/**
 * charAt()
 */
console.log(fullName.charAt('2'));

/**
 * Get Last Character of String
 */
console.log(fullName.charAt(fullName.length - 1));

/**
 * substring()
 */
console.log(fullName.substring(0, 6));

/**
 * slice()
 * '-ve' indexing perform task in reverse order
 */
console.log(fullName.slice(0, 4));
console.log(fullName.slice(-3));

/**
 * split()
 */
const str = 'This is amazing world of jumanji';
const strArr = str.split(' ');
console.log(strArr);

/**
 * replace()
 */
const header = 'Bearer jasklgjashgjaskldgjahsjgjasjkgljaskgja';
const token = header.replace('Bearer ', '');
console.log(token);

/**
 * includes()
 */
console.log(header.includes('Bearer'));