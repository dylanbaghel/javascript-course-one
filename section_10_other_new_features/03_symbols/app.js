/**
 * Symbols
 *  --> Unique Primitive Type
 */
const sym1 = Symbol();
console.log(sym1);
console.log(typeof sym1);

const sym2 = Symbol('sym2');
console.log(sym2);

console.log(Symbol() === Symbol());
console.log(Symbol('123') === Symbol('123'));
console.log(`Hello ${sym1.toString()}`);
console.log(`Hello ${String(sym1)}`);

/**
 * Symbols Are Not Enumerable in for...in Loop.
 */

/**
 * Symbols Can Be Used As Unique Object Keys
 */
const KEY1 = Symbol();
const KEY2 = Symbol();

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj);

for (let i in myObj) {
    console.log(`${i}: ${myObj[i]}`);
}

/**
 * Symbols Are Ignored By JSON.stringify()
 */
console.log(JSON.stringify({[Symbol()]: 'Here We Go'}))