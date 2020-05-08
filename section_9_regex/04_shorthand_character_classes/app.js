/**
 * Shorthand Character Classes
 */
let exp;

exp = /\w/; // Word Character - Alphanumeric or _ (Check Only First Character)
reTest(exp, 'abhishek baghel');

exp = /\w+/; // Checks One or More Character
reTest(exp, 'abhishek');

exp = /\W/; // Non-Word Character
reTest(exp, ' ');
reTest(exp, '45');

exp = /\d/; // Match any digit
reTest(exp, 4455);

exp = /\d+/; // Match Any Digit 0 or More Times
reTest(exp, 4545);

exp = /\D/; // Match Any Non-Digit
reTest(exp, 454);
reTest(exp, 'agdas');

exp = /\s/; // Match Whitespace Character
reTest(exp, ' ');
reTest(exp, '   ');
reTest(exp, 'word');

exp = /\S/; // Match Non-Whitespace Character
reTest(exp, '');
reTest(exp, 'just');

exp = /Hell\b/i; // Word Boundary - Match Exact Word 'Hell' Not Word Prefix With 'Hell';
reTest(exp, 'Hello');
reTest(exp, 'Hell');

// Assertions
exp = /x(?=y)/i; // Match 'x' only if followed by 'y'
reTest(exp, 'Hello x');
reTest(exp, 'Hello xy');
reTest(exp, 'Hello xzy');

exp = /x(?!y)/i; // Match 'x' only if not followed by 'y'
reTest(exp, 'Hello x');
reTest(exp, 'Hello xy');
reTest(exp, 'Hello xzy');

function reTest(re, str) {
    console.log(re.exec(str));
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}