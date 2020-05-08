/**
 * Sets
 *  --> Array Like Data Structure That Can Only One Occurrence of Unique Values.
 */

const set1 = new Set();

// Adding Values To Set
set1.add(100);
set1.add('A String');
set1.add({ name: 'Dyaln' });
set1.add(true);
set1.add(100);
set1.add(100);

console.log(set1);

/**
 * Initialization of Sets At The Time of Declaring
 */
const set2 = new Set(['Abhishek', 'Abhishek', 'Dylan', 'Bittu']);
console.log(set2);

// Get Count
console.log(set1.size);

// Check For Values
console.log(set1.has(100));

// Delete From Set
set1.delete('A String');
console.log(set1);

/**
 * Iterating Through Sets
 */
for (let item of set1) {
    console.log(item);
}

set1.forEach(function(item) {
    console.log(item);
});

// Convert Sets To Arrays
const setArr = Array.from(set1);
console.log(setArr);