/********************* 06_TEMPLATE-LITERAL *****************************/


const name = 'John';
const age = 21;
const job = 'Web Developer';
const city = 'Gwalior'
let html;

// Without Template String (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

console.log(html);

// With Template Literal
html = `
    <ul>
        <li>${name}</li>
        <li>${age}</li>
        <li>${job}</li>
        <li>${city}</li>
    </ul>
`;
console.log(html);