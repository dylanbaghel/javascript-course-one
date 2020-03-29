/********************* 01_VARIABLES *****************************/

// Var
var name = 'Abhishek Baghel';
console.log(name);

name = "Dylan Baghel";
console.log(name);

// Initialize Var
var greeting;
console.log(greeting); // Undefined

// Asssinging Var
greeting = 'Hello';
console.log(greeting);

/**
 * Variables - Only letters, numbers, '_', '$'
 * Cannot Start With Number
 * 
 */

/**
 * Multiword Variables
 * firstName - Camel Case
 * first_name - Snake Case
 * FirstName - Pascal Case - Recommended For Object Oriented Programming
 */


 /**
  * let - Similar To Var But Scoping is the difference.
  */
 let firstName = 'Abhishek';
 console.log(firstName);
 firstName = 'Dylan';
 console.log(firstName);

 /**
  * const - constant type variable, cannot reassign
  * but can mutate const variable
  */
 const lastName = 'Baghel';
 console.log(lastName);

  lastName = 'Sara'// -> Cannot Reassign Const

const names = ['Abhishek Baghel', 'Dylan Baghel'];
names.push('Kora Williams');
console.log(names);

