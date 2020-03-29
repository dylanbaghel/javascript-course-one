/********************* 03_TYPE_CONVERSION *****************************/

/**
 * Number, Bool, Date, Array To String
 * String() OR .toString()
 */
const age = 5;
console.log(typeof age);
// const ageStr = String(age)
const ageStr = age.toString()
console.log(typeof ageStr);

console.log(typeof true.toString());
console.log(typeof new Date().toString());
console.log(typeof [1,2,3].toString());

/**
 * String to Number
 * Only Works If String Contains Only Number
 */
console.log(Number("5555"));
console.log(parseInt("2222"));
console.log(parseFloat("222.55"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number("hello")) //spit NaN - Not a Number


/**
 * Type Coersion
 * When Javascript automatically converts the data type in certain condition
 */
const val1 = 5;
const val2 = "6";

const sum = val1 + val2 // JS automatically convert val1 to string
console.log(val1 + val2);

