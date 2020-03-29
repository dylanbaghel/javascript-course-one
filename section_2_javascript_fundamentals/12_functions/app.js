/*************** 12_FUNCTIONS *********/


/**
 * FUNCTIONS:
 *  --> A JavaScript function is a block of code designed to perform a particular task.
 *  --> A JavaScript function is executed when "something" invokes it (calls it).
 *  --> Three Ways To Create Functions:
 *          --> 1. Function Keyword
 *          --> 2. Function Expression
 *          --> 3. Arrow Function (ES6)
 */

//  FUCNTION DECLARATION
 function greet() {
     return 'Hello';
 }

//  FUNCTION CALL
console.log(greet());

/**
 * FUNCTION WITH PARAMETERS
 */
function add(x, y) {
    return x + y;
}
console.log(add(55, 65));


/**
 * FUNCTION WITH DEFAUL PARAMETERS (ES5)
 */
function square(x) {
    if (typeof x === 'undefined') {
        x = 1;
    }
    return x * x;
}
console.log(square());

/**
 * FUNCTION WITH DEFAULT PARAMETERS (ES6)
 */
function mult(x = 1, y = 1) {
    return x * y;
}
console.log(mult());


/**
 * FUNCTION EXPRESSION
 */
const message = function(name = 'Anonymous') {
    return `Hello, ${name}`;
}
console.log(message('Abhishek Baghel'));

/**
 * IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
 *  --> Used In 'Module Design Pattern'
 */
(function() {
    console.log('IIFE Ran....');
})();

/**
 * IIFEs - with parameters
 */
(function(name) {
    console.log(`Hello, ${name} --> You Ran IIFE`);
})('Abhishek Baghel');

/**
 * PROPERTY METHODS:
 *  --> When a function is declared inside an object then it is called 'PROPERTY METHODS'
 */
const notes = {
    // ES5 Style
    add: function() {
        console.log('Add Note');
    },

    // ES6 Style
    remove() {
        console.log('Note Delete')
    }
};

notes.edit = function() {
    console.log('Note Edit');
}

notes.add();
notes.remove();
notes.edit();