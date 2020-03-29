/*************** 05_TRAVERSING_DOM ***************/

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

/**
 * Grabbing Child Elements, Nodes;
 */
// Get Child Nodes
const childNodes = list.childNodes;
/**
 * @GOTCHA
 * childNodes return NodeList of child nodes of the targeted element, but it also returns extra space, comments as child nodes.
 * to avoid those child nodes, we can use 'children' property, which return the HtmlCollection containing all the child element.
 */
console.log(childNodes);
console.log(childNodes[0].nodeName);
console.log(childNodes[0].nodeType);
/**
 * @GOTCHA
 * nodeType return code, which refers to the type of the node.
 * Code For Node:
 *  --> 1 - Element
 *  --> 2 - Attribute (deprecated)
 *  --> 3 - Text Node
 *  --> 4 - Comment
 *  --> 5 - Document Itself
 *  --> 6 - DocType
 */

// Get Children Element Nodes
console.log(list.children);
console.log(list.children[0]);
list.children[1].textContent = 'Power';
// Children of Children
console.log(list.children[3].children);
console.log(list.children[3].children[0]);

/**
 * firstChild, lastChild, firstElementChild, lastElementChild
 */
console.log(list.firstChild);
console.log(list.firstElementChild);
/**
 * @GOTCHA
 * Similar To childNodes firstChild and lastChild consider 'extra spaces and comment' as a part of the List.
 */
console.log(list.lastChild);
console.log(list.lastElementChild);

console.log(list.childElementCount);

/**
 * Grabbing Parent Elements, Nodes;
 */

// Get Parent Node
console.log(listItem.parentNode);
console.log(listItem.parentElement)
console.log(listItem.parentElement.parentElement);

/**
 * Grabbing Sibling Elements, Nodes;
 */
// Get Sibling
console.log(listItem.nextSibling);
console.log(listItem.nextSibling.previousSibling);
/**
 * @GOTCHA
 * Similar To childNodes nextSibling and previousSibling consider 'extra spaces and comment' as a part of the List.
 */
console.log(listItem.nextElementSibling);
console.log(listItem.nextElementSibling.previousElementSibling);

