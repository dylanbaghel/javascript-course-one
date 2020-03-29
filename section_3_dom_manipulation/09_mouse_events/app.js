/********** 09_MOUSE_EVENTS  *********/

/**
 * Mouse Events
 */

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Double Click
clearBtn.addEventListener('dblclick', runEvent);
// Mouse Down
clearBtn.addEventListener('mousedown', runEvent);
// Mouse Up
clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
card.addEventListener('mouseenter', runEvent);
// Mouse Leave
card.addEventListener('mouseleave', runEvent);
// Mouse Over
card.addEventListener('mouseover', runEvent);
// Mouse Out
card.addEventListener('mouseout', runEvent);
// Mouse Move
card.addEventListener('mousemove', runEvent);
/**
 * @GOTCHA
 *  --> mouseenter-mouseover and mouseleave-mouseout are similar but there is a little difference.
 *  --> mouseenter-mouseleave fires only on the actual element.
 *  --> mouseover-mouseout fires on actual element as well as its child elements.
 */
// Event Handler
function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type );
}