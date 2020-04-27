/**
 * Ajax & XHR:
 *  --> AJAX - Asynchronous Javascript & XML.
 *  --> Set of Web Technologies.
 *  --> Send & Receive Data Asynchronously.
 *  --> Does not interfere with the current page.
 *  --> JSON has replaced XML for the most part.
 */

document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);

    console.log('Ready State: ', xhr.readyState);

    // Optional - Used For Spinners / Loaders
    xhr.onprogress = function () {
        console.log('Loading...', xhr.readyState);
    }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
            document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // Before Onload Available
    xhr.onreadystatechange = function () {
        console.log('Ready State Change: ', xhr.readyState);
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }

    // Error Handle
    xhr.onerror = function () {
        console.log('Request Error....', this);
    }

    xhr.send();

    /**
     * ReadyState Values:
     *  --> 0: Request Not Initialized
     *  --> 1: Server Connection Established
     *  --> 2. Request Received
     *  --> 3. Processing Request
     *  --> 4. Request Finished and Response is Ready
     */
}