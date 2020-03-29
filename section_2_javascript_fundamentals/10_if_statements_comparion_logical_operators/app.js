/*********** 10_IF-STATEMENTS__COMPARISION-OPERATORS *************/

/**
 * COMPARISION OPERATORS:
    * '==' --> Equality Operator
    * '!=' --> Not Equal To
    * '===' --> Equality Operator {Check Type along with value}
    * '!==' --> Not Equal To {Check Type along with value}
    * '>=' --> Greater Than Equal To
    * '<=' --> Less Than Equal To
    * '>' --> Greater Than
    * '<' --> Less Than
 */

/**
 * If (something) {
 *  do something;
 * } else {
 *  do something else
 * }
 */

//  Equal To
 const id = 100;

 if (id === 100) {
     console.log('CORRECT');
 } else {
     console.log('INCORRECT');
 }

//  Not Equal To
if (id !== 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Test if undefined
if (typeof job === 'undefined') {
    console.log('No Job is there');
} else {
    console.log(`Job: ${job}`)
}

// Greater OR Less Than
if (id > 100) {
    console.log('Greater Than 100')
} else {
    console.log('Less Than or equal to 100')
}

/**
 * if (something) {
 *  do something;
 * } else if (something) {
 *  do something;
 * } else if (something) {
 *  do something;
 * } else {
 *  do something default;
 * }
 */
const day = 'FrI';
if (day.toLowerCase().includes('mon')) {
    console.log("It's Monday")
} else if (day.toLowerCase().includes('tue')) {
    console.log("It's Tuesday");
} else if (day.toLowerCase().includes('wed')) {
    console.log("It's Wednesday");
} else if (day.toLowerCase().includes('thu')) {
    console.log("It's Thursday");
} else if (day.toLowerCase().includes('fri')) {
    console.log("It's Friday");
} else if (day.toLowerCase().includes('sat')) {
    console.log("It's Saturday");
} else if (day.toLowerCase().includes('sun')) {
    console.log("It's Sunday");
} else {
    console.log("Invalid Parameter");
}


/**
 * LOGICAL OPERATORS:
 *  --> '&&' --> AND Operator {True, True}
 *  --> '||' --> OR Operator {True, False}, {False, True}
 */

const age = 17;

// AND
if (age > 0 && age < 12) {
    console.log("Child");
} else if (age > 12 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

// OR
if (age < 16 || age > 65) {
    console.log("Cannot Run In Race")
} else {
    console.log("Can Race")
}

/**
 * Ternary Operators:
 *  --> condition ? Evaluate if TRUE : Evaluate if False
 */
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

/**
 * Without Braces {Only One Statement}
 */
if (id === 0)
    console.log('CORRECT');
else
    console.log('INCORRECT');
