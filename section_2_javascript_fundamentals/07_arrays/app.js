/********************* 07_ARRAYS *****************************/


/**
 * --> Two Ways To Create Arrays
 */
const numbers = [43, 56, 33, 23, 36, 5];
const numbers2 = new Array(22,45,464,5,5,6);
const names = ['Abhishek', 'Dylan', 'Bittu'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];


/**
 * Get Array Length
 */
console.log(numbers.length);

/**
 * Check if is Array
 */
console.log(Array.isArray(numbers));

/**
 * Get Single Value - Indexing
 * --> Indexing is 'ZERO' Based
 */
console.log(names[2]);

/**
 * Insert into array
 */
names[1] = 'Joker';
console.log(names);

/**
 * indexOf()
 */
console.log(numbers.indexOf(36));

/**
 * Mutating Arrays
 * push() - Add item at the last position.
 * unshift() - Add item at the first position.
 * pop() - Remove Item from the end position.
 * shift() - Remove Item from the front position
 */
numbers.push(250);
console.log(numbers);
numbers.unshift(111);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);

/**
 * Splice Array
 * --> splice()
 */
numbers.splice(1, 3);
console.log(numbers);

/**
 * Reverse Array
 * --> reverse()
 */
numbers.reverse();
console.log(numbers);

/**
 * Concatenate array
 */
const joined = names.concat(mixed);
console.log(joined);

/**
 * Sorting Arrays
 * --> sort()
 */
sortedNames = names.sort();
console.log(sortedNames);

let num = [43, 56, 33, 23, 36, 5];
let sortedNum = num.sort();
console.log(sortedNum);
/**
 * @GOTCHA
 * sort() method sort numbers alphabetically, so provide comparator function to get ASCENDING OR DESCENDING order.
 */

//  ASCENDING
const sortedNumASC = num.sort(function(x, y) {
    return x - y;
});
console.log(sortedNumASC);
// DESCENDING
const sortedNumDESC = num.sort(function(x, y) {
    return y - x;
});
console.log(sortedNumDESC);

/**
 * FIND IN ARRAY
 * --> find()
 */
const foundName = names.find(function(name) {
    return name.toLowerCase() === 'abhishek';
});
console.log(foundName);