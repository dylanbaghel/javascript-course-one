/**
 * Module & Revealing Module Pattern
 *      --> Main Difference Between Module & Revealing Module Pattern is that Module Pattern return Object Containing Function That Call The Private Function But In Case of Revealing Module Pattern an object is returned which reveals the actual private function to outside.
 */

/**
 * Module Pattern
 */

// Basic Structure
(function() {
    // Declare Private Variables and Functions
    return {
        // Declare Public Variables and Functions
    }
})();

const UICtrl = (function() {
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function() {
            changeText();
        }
    };
})();

UICtrl.callChangeText();

/**
 * Revealing Module Pattern
 */
const ItemCtrl = (function() {
    let data = [];


    function add(item) {
        data.push(item);
        console.log('Item Added...');
    }

    function get(id) {
        return data.find(item => item.id === id);
    }

    return {
        add,
        get
    }
})();

ItemCtrl.add({
    id: 1,
    name: 'Abhishek'
});
ItemCtrl.add({
    id: 2,
    name: 'Dylan'
});
console.log(ItemCtrl.get(1));