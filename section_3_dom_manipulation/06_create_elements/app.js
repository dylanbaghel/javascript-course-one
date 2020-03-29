/*********** 05_CREATE_ELEMENTS *****************/

/**
 * document.createElement()
 *  --> It Creates New Element
 */
// Create Element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add Id
li.id = 'new-id';

// Add Attribute
li.setAttribute('title', 'New Item');

// Create Text Node and Append
li.appendChild(document.createTextNode('Hello World'));

// Create New Link Element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link as child to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);