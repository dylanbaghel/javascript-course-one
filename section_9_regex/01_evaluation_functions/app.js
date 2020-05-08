/**
 * Regular Expression
 *  --> Use To Match Patterns.
 *  --> Mainly Use For Validation
 */

/**
 * Evaluation Functions:
 *  --> exec() - Return Result in an array or null if unmatched.
 *  --> match() - Return Result in an array or null if unmatched.
 *  --> test() - Returns True or False
 *  --> search() - Return index of the first match if not found return -1.
 *  --> replace() - Return New String Replacing Some or All Matches of a Pattern.
 */

/**
 * 'i' --> Case Insesitive
 * 'g' --> Global Search - Search The Whole Input String For Pattern Not The Only First Match.
 */

/**
 * Exact Match
 */
let re = /hello/;
console.log(re);
console.log(re.source);

let result = re.exec('hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

re = /hello/i;
result = re.test('Hello');
console.log(result);

result = "hello world".match(re);
console.log(result);

result = "Abhishek Hello There".search(re);
console.log(result);

result = "Hello There".replace(re, 'Hi');
console.log(result);

