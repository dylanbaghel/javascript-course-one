/**
 * Character Set & Quantifiers
 */
let exp;

// Brackets [] --> Character Set

exp = /gr[ae]y/i; // Must Be atleast 'a' or 'e'
reTest(exp, 'gray');
reTest(exp, 'grey');
reTest(exp, 'gry');

exp = /[GF]ray/i; // Must be a 'G' or 'F'
reTest(exp, 'gray');
reTest(exp, 'fray');
reTest(exp, 'pray');

exp = /[^GF]ray/i; // Match Anything Except a 'G' or 'F'
reTest(exp, 'gray');
reTest(exp, 'fray');
reTest(exp, 'pray');

exp = /[A-Z]ray/; // Match Any Uppercase Letter [A-Z]
reTest(exp, 'Tray');

exp = /[a-z]ray/; // Match any Lowercase Letter [a-z]
reTest(exp, 'kray');

exp = /[A-Za-z]ray/; // Match Any Letter on Any Case [A-Za-z]
reTest(exp, 'tray');
reTest(exp, 'Kray');

exp = /[0-9]ray/; // Match Any Digit [0-9]
reTest(exp, 'Xray');
reTest(exp, '5ray');

// Braces {} --> Quantifiers
exp = /Hel{2}o/i; // Must Occur Exactly {n} amount of times
reTest(exp, 'hello');

exp = /Hel{2,4}o/i; // Must Occur Range {m, n} amount of times
reTest(exp, 'Hello');
reTest(exp, 'helllo');
reTest(exp, 'hellllo');

exp = /Hel{2,}o/i // Must Occur atleast {n,} amount of times.
reTest(exp, 'Hello');
reTest(exp, 'hellllllllllo');
reTest(exp, 'helo');

// Parantheses () --> Grouping

exp = /^([0-9]x){3}$/; // Must Be Start With Any Digit Then Followed by x i.e '3x' and it will occur three times i.e. '3x3x3x';
reTest(exp, '3x3x3x');
reTest(exp, '3x3x3x3x3x');

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}