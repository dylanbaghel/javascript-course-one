/********************* 02_DATA_TYPES *****************************/

/** NOTES */

/**
 * Primitive Data Types:
 * --> Stored directly in the location the varaible access
 * --> Store on the Stack
 * --> String, Number, Boolean, Null, Undefined, Symbols (ES6)
 */

/**
 * Reference Data Types:
 * --> Accessed By Reference
 * --> Objects that are stored on the heap
 * --> A pointer to a location in memory
 * --> Arrays, Object Listerals, Functions, Dates, Anything Else...
 */

 /**
  * --> Javascript is a dynamic typed language.
  * --> Types are associated with values not variables.
  * --> We do not need to specify types.
  * --> Most other languages are statically types (JAVA, C#, C++ etc.).
  * --> There are supersets of JS and addons to allow static typing (Typescript, Flow)
  */

/** END OF NOTES */

/** PRIMITIVE DATA TYPES */

// String
const name = 'Abhishek Baghel';
console.log(typeof name);
// Number
const age = 22;
console.log(typeof age);
// Boolean
const isOpen = false;
console.log(typeof isOpen);
// Null
const car = null;
console.log(typeof car)
/**
 * @GOTCHA
 * "typeof null" shows object but it is a primitive type.It is kind of bug in javascript.
 */

//  Undefined
let test;
console.log(typeof test);
// Symbol 
const sym = Symbol()
console.log(typeof sym);

/** REFERENCE DATA TYPE */

// Array
const powers = ['Super Strength', 'High Punch'];
console.log(typeof powers);
// Object Literals
const address = {
    city: 'Gwalior',
    state: 'MP'
};
console.log(typeof address);
// Date
const today = new Date();
console.log(typeof today);


