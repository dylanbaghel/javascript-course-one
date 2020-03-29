/********************* 09_DATE-TIME *****************************/


const today = new Date();
console.log(today);
console.log(today.toString());


/**
 * Get Specific Date & Time
 * --> Many Ways
 * @DOCS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
let birthday = new Date('06-06-1998 00:30:00');
console.log(birthday);
birthday = new Date('June 06 1998');
console.log(birthday);
birthday = new Date('06/06/1998');
console.log(birthday);

/**
 * DateGet Methods
 *  --> getMonth() - Zero Based (0 - January & 11 - December)
 *  --> getDate()
 *  --> getDay() - Start With Sunday
 *  --> getFullYear()
 *  --> getHours()
 *  --> getMinutes()
 *  --> getSeconds()
 *  --> getMilliseconds()
 *  --> getTime() - Give Timestamp
 */
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());
console.log(today.getTime());

/**
 * Date Set Methods
 *  --> setMonth()
 *  --> setDate()
 *  --> setFullYear()
 *  --> setHours()
 *  --> setMinutes()
 *  --> setSeconds()
 *  --> setMilliseconds()
 */
const date = new Date();
date.setMonth(6);
console.log(date);
date.setDate(22);
console.log(date);
date.setFullYear(1988);
console.log(date);
date.setHours(6);
console.log(date);
date.setMinutes(22);
console.log(date);
date.setSeconds(52);
console.log(date);
date.setMilliseconds(600);
console.log(date.getMilliseconds());
