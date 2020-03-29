/************ 04_DOM_SELECTORS_MULTI_ITEM  *******/

/**
 * Multi Dom Selectors selectes the multiple items in the dom. These selectors either returns a NodeList or HtmlCollection
 * --> document.getElementByClassName()
 * --> document.getElementByTagName()
 * --> document.querySelectorAll()
 */

 /**
  * document.getElementByClassName()
  *     --> Select All Items Which Contains The Targeted Class Name
  *     --> Returns HtmlCollection
  */

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

// Selection With Scoping
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

/**
 * document.getElementByTagName()
 *  --> Select All Items By Their Tag
 *  --> Returns HtmlCollection
 */
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0])
lis[2].style.color = 'green';

/**
 * Convert HTML Collection Into Array
 */
lis = Array.from(lis);
lis.forEach(function(li) {
    console.log(li);
    li.style.color = 'blue';
});

/**
 * document.querySelectorAll()
 *  --> Selects All The Items Based on the CSS selectos.
 *  --> Returns NodeList
 * 
 * @GOTCHA
 *  --> No Need To Convert NodeList To Array because We Can Use Indexing as well as array methods on NodeList
 */
const itemLis = document.querySelectorAll('.collection-item');
console.log(itemLis);
itemLis.forEach(function(item) {
    item.textContent = 'Power Rangers';
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
    li.style.backgroundColor = '#ccc';
});

liEven.forEach(function(li) {
    li.style.backgroundColor = '#000';
    li.style.color = '#fff';
});