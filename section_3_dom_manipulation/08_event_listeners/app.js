/************* 08_EVENT_LISTENERS ******/

/**
 * Event:
 *  --> JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page.
 *  --> When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc.
 *  --> Developers can use these events to execute JavaScript coded responses, which cause buttons to close windows, messages to be displayed to users, data to be validated, and virtually any other type of response imaginable.
 *  --> Events are a part of the Document Object Model (DOM) Level 3 and every HTML element contains a set of events which can trigger JavaScript Code.
 */

 /**
  * Event Listeners:
  *     --> Mouse Events
  *     --> Keyboard Events
  *     --> Other Input Devices Events
  */

document.querySelector('.clear-tasks').addEventListener('click', function(e) {
    e.preventDefault();
    /**
     * preventDefault() skip the default behaviour of elements such as links, forms etc.
     */
    console.log('Click');
    console.log(e);
    console.log(e.target);
    /**
     * @GOTCHA
     *  --> e.target gives the element on which this event is attached;
     */
    console.log(e.target.className);
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.clientY);
    console.log(e.clientX);
    /**
     * @GOTCHA
     *  --> clientY, clientX returns co-ordinates relative to the window.
     */
    console.log(e.offsetY);
    console.log(e.offSetX);
    /**
     * @GOTCHA
     *  --> clientY, clientX returns co-ordinates relative to the element.
     */
});