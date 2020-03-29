/************* 15_SCOPING *******/

/**
 * Global Scope
 * Function Scope
 * Block Level Scope
 */
var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope: ', a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a,b,c);
}
test();

console.log('Global Scope: ', a, b, c);

if (true) {
    var a = 7;
    /**
     * @GOTCHA
     * var in block level scope affects global level scope.
     */
    let b = 8;
    const c = 9;
    console.log('Block Level Scope: ', a,b,c);
}

console.log('Global Scope: ', a, b, c);

for(let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);

for(var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);

