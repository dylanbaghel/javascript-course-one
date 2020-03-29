/***************** 07_REMOVE_REPLACE_ELEMENTS  ************/

/**
 * REPLACE ELEMENT
 *  --> Parent Element Can Replace its Child Element With New Element Using 'replaceChild()' Method.
 */

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New Text Node
newHeading.appendChild(document.createTextNode('Task List'));

// Get The Old Heading
const oldHeading = document.querySelector('#task-title');
// Get Parent of Old Heading
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);


/**
 * REMOVE ELEMENT
 */
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove Child Item
list.removeChild(lis[3]);


/**
 * CLASSES & ATTRIBUTES
 */
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

// Classes
console.log(link.className);
console.log(link.classList);
/**
 * @GOTCHA
 *  --> classList Returns DOMTokenList
 */
console.log(link.classList[0]);
link.classList.add('test');
link.classList.remove('test');
console.log(link);

// Attributes
console.log(link.getAttribute('href'));
link.setAttribute('href', 'http://google.com');
console.log(link.hasAttribute('href'));
console.log(link.hasAttribute('title'));
link.setAttribute('title', 'Jonas');
console.log(link.getAttribute('title'));
link.removeAttribute('title');
console.log(link.getAttribute('title'));