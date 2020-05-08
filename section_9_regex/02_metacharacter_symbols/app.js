/**
 * Metacharacter Symbols
 */
let exp;
exp = /hello/;
reTest(exp, 'Hello World');

exp = /hello/i;
reTest(exp, 'Hello World');

exp = /^h/i; // Must Start With
reTest(exp, 'Hello World')
reTest(exp, "Abhishek Hello World");

exp = /world$/i; // Must End With
reTest(exp, 'Hello World');
reTest(exp, 'Heloo MyWorldF');

exp = /^hello$/i; // Must Begin and End With
reTest(exp, 'Hello');

exp = /h..lo/i; // Matches any One Character
reTest(exp, 'Hiilo');

exp = /h*lo/i; //Matches any character 0 or more times.
reTest(exp, 'hlo');
reTest(exp, 'Hiiiilllkhkgdlo');

exp = /gre?a?y/i; // Optional (e or a).
reTest(exp, 'gray');
reTest(exp, 'grey');
reTest(exp, 'gry'); //@GOTCHA Drawback of This Way --> Can Skip Optional Character (Use Character Sets For Better Solution).

exp = /gre?a?y\?/i // Escaping
reTest(exp, 'gray?');
reTest(exp, 'grey?');
reTest(exp, 'gray');

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}