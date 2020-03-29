/************** 13_STANDARD_LOOPS *******/

/**
 * LOOPS:
 *  --> Loops can execute a block of code a number of times.
 *  --> Loops are handy, if you want to run the same code over and over again, each time with a different value.
 *  --> Often this is the case when working with arrays
 * --> THREE TYPES:
 *      --> 1. While Loop
 *      --> 2. Do-While Loop
 *      --> 3. For Loop
 */


/**
 * For Loop
 */

let table = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
}

/**
 * While Loop
 */
table = 11;
let i = 1;

while (i <= 10) {
    console.log(`${table} * ${i} = ${table * i}`);
    i++;
}

/**
 * Do-While Loop
 * @GOTCHA
 *  --> This Loop Runs Atleast Once In Case of Failure of Condition
 */
i = 50;

do {
    console.log('Number: ' + i);
    i++;
}while(i < 10);

/**
 * Break & Continue
 */

for(let i = 1; i < 11; i++) {
    if (i === 3) {
        console.log(`${i} is my favourite number.`);
        continue;
    }

    console.log('Number: ' + i);
}

for(let i = 1; i < 11; i++) {
    if (i === 3) {
        console.log(`Stopped At ${i}.`);
        break;
    }

    console.log('Number: ' + i);
}

/**
 * Looping Through Arrays
 */
const names = ['Abhishek', 'Dylan', 'Bittu', 'John', 'Jonas'];

for(let i = 0; i < names.length; i++) {
    console.log(`${i}: ${names[i]}`);
}

/**
 * Looping Through Arrays
 *  --> Using 'forEach()' Method
 */
names.forEach(function(name) {
    console.log(name);
});

/**
 * 'map()' Function
 *    --> return new Array of modified data
 */
const namesHtml = names.map(function(name) {
    return `<p>${name}</p>`;
});
console.log(namesHtml);

/**
 * For-In Loop
 *  --> Used For Objects
 */
const user = {
    name: 'Abhishek',
    age: 21,
    hobby: ['Programming', 'Maths']
};

for(let x in user) {
    console.log(`${x}: ${user[x]}`);
}