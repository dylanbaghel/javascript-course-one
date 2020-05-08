/**
 * Maps
 *   --> Key-Value Pair Data Structure.
 *   --> Can Use Any Type of Value as a Key.
 */

 const map1 = new Map();

// Set Up Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set Map Values By Key
map1.set(key1, 'Value of Key1');
map1.set(key2, 'Value of Key2');
map1.set(key3, 'Value of Key3');

// Grabbing Values By Key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count Values
console.log(map1.size);

/**
 * Looping Using for...of Loop
 */
for (let [key, value] of map1) {
    console.log(`${key}: ${value}`);
}

// Iterate Keys Only
for (let key of map1.keys()) {
    console.log(key);
}

// Iterate Values Only
for (let value of map1.values()) {
    console.log(value);
}

/**
 * Looping Using forEach loop
 */
map1.forEach(function(value, key) {
    console.log(`${key}: ${value}`);
});

// Converting Maps To Arrays
const keyValArr = Array.from(map1);
console.log(keyValArr);

const valArr = Array.from(map1.values()) ;
console.log(valArr);

const keyArr = Array.from(map1.keys());
console.log(keyArr);