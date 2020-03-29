/************** 02_DOM_SELECTORS_SINGLE_ITEM *******/

/**
 * --> Single Item DOM Selectors Selects Only One Item In The DOM. If We Select any item with class name then the single item selector selects the first item which contains the targeted class
 * --> document.getElementById()
 * --> document.querySelector()
 */

 /**
  * document.getElementById():
  *     --> Find Item Using Id
  */
 const taskTitle = document.getElementById('task-title');

 console.log(taskTitle);

// Get things from the element
console.log(taskTitle.id);
console.log(taskTitle.className);

// Change Styling
taskTitle.style.backgroundColor = '#333';
taskTitle.style.color = '#fff';

// Change Content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span>Task List</span>';

/**
 * document.querySelector():
 *  --> Find Item Based On Any CSS Selectors
 */
const byId = document.querySelector('#main');
console.log(byId);
const byClass = document.querySelector('.card');
console.log(byClass);
const byTagName = document.querySelector('h5');
console.log(byTagName);

document.querySelector('li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'green';

document.querySelector('li:nth-child(3)').style.color = 'yellow';

document.querySelector('li:nth-child(4)').textContent = 'Hello World';