/************ 14_WINDOW_OBJECT ********/

/**
 * Window Object
 *  --> It is the global object available in the client side javascript.
 *  --> document is the part of Window Object.
 */

/**
 * window.console.log()
 *  --> No Need To Use Window, but It is the part of window object.
 */
window.console.log('Console.log....');

/**
 * window.alert()
 *  --> No Need To Use Window, but it is the part of window object.
 */
window.alert('Alert');

/**
 * window.prompt()
 *  --> No Need To Use Window, but it is the part of window object.
 */
const input = window.prompt('Enter');
alert(input);

/**
 * window.confirm()
 *  --> No Need To Use Window, but it is the part of window object.
 */
if (confirm('Are You Sure?')) {
    console.log('YES'); 
} else {
    console.log('No');
}

/**
 * Outer height and width
 */
const outerHeight = window.outerHeight;
console.log(`Outer Height: ${outerHeight}`);
const outerWidth = window.outerWidth;
console.log(`Outer Width: ${outerWidth}`);

/**
 * Inner height and width
 */
const innerHeight = window.innerHeight;
console.log(`Inner Height: ${innerHeight}`);
const innerWidth = window.innerWidth;
console.log(`Inner Width: ${innerWidth}`);

/**
 * Scroll Points
 */
const scrollY = window.scrollY;
console.log(`scrollY: ${scrollY}`);
const scrollX = window.scrollX;
console.log(`scrollX: ${scrollX}`);

/**
 * Location Object
 */
console.log(window.location);
console.log(window.location.hostname);
console.log(window.location.port);
console.log(window.location.href);
console.log(window.location.search);

// window.location.href = 'http://google.com';
// window.location.reload();

/**
 * History Object
 */
console.log(window.history);


/**
 * Navigator Object
 *  --> It's The Part of Browser, not of the engine.
 */
console.log(window.navigator);
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.userAgent);
console.log(window.navigator.platform);
console.log(window.navigator.vendor);
console.log(window.navigator.language);