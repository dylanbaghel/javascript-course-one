/************** 10_KEYBOARD_INPUT_EVENTS *********/

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const select = document.querySelector('select');

taskInput.value = '';

form.addEventListener('submit', runEvent);

/**
 * Input Events
 */
taskInput.addEventListener('keydown', function(e) {
    console.log(e.target.value);
});

taskInput.addEventListener('keyup', function(e) {
    console.log(e.target.value);
});

taskInput.addEventListener('keypress', function(e) {
    console.log(e.target.value);
});

taskInput.addEventListener('focus', function(e) {
    console.log('focus');
});
/**
 * @GOTCHA
 *  --> focus event runs when you focus on input.
 *  --> it's opposite is blur event which runs when you focus out from an input.
 */
taskInput.addEventListener('blur', function(e) {
    console.log('blur');
});

taskInput.addEventListener('cut', function(e) {
    console.log(e.type);
});

taskInput.addEventListener('paste', function(e) {
    console.log(e.type);
});

taskInput.addEventListener('copy', function(e) {
    console.log(e.type);
});

taskInput.addEventListener('input', function(e) {
    console.log(e.type);
});
/**
 * @GOTCHA
 *  --> Anything You do with input this input event fires - {such as typing, cut, copy, paste etc.}
 */

 select.addEventListener('change', function(e) {
     console.log(e.target.value);
 });

function runEvent(e) {
    /**
     * @GOTCHA
     *  --> form has default behaviour of processing form and submitting to the backend. We can stop this default behaviour by e.preventDefault();
     */
    e.preventDefault();

    const task = taskInput.value;
    console.log(task);
}