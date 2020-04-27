/**
 * Arrow Function
 */

// Basic
const greeting = () => {
    console.log('From Arrow Function');
};
greeting();
// With Parameters
const add = (x, y) => {
    console.log(x + y);
};
add(5, 10);
// Returning Value
const mult = (x, y) => {
    return x * y;
};
console.log(mult(5, 6));
// In Case of Single Parameter
const myName = name => {
    return `Mr. ${name}`;
};
console.log(myName('Abhishek'));
/**
 * Arrow Expression 
 *  --> Return Implicitly.
 *  --> Good For Single Line Returning Function.
 */
const adder10 = x => x + 10;
const subtract = (x, y) => Math.abs(x - y);

console.log(adder10(5));
console.log(subtract(5, 15));

/**
 * Lexical This
 */

// Prototypes
function State1() {
    this.items = [
        {
            id: "1",
            text: "Prototype One"
        },
        {
            id: "2",
            text: "Prototype Two"
        },
        {
            id: "3",
            text: "Prototype Three"
        }
    ];
}

State1.prototype.updateText = function (id, newText) {
    /**
             * Won't Work Here Coz Normal Function Does Not Use Lexical Scoping.
             */
    // this.items.forEach(function (item, index) {
    //     if (item.id === id) {
    //         this.items[index].text = newText;
    //     }
    // });

    /**
     * Solution: 1
     */
    // const self = this;
    // this.items.forEach(function (item, index) {
    //     if (item.id === id) {
    //         self.items[index].text = newText;
    //     }
    // });

    /**
     * Solution: 2
     */
    this.items.forEach((item, index) => {
        if (item.id === id) {
            this.items[index].text = newText;
        }
    });
}

const state1 = new State1();
state1.updateText("3", "Updated Proto_____");
console.log(state1.items);

// ES6 - Classes
class State2 {
    constructor() {
        this.items = [
            {
                id: "1",
                text: "Item One"
            },
            {
                id: "2",
                text: "Item Two"
            },
            {
                id: "3",
                text: "Item Three"
            }
        ];
    }

    updateText(id, newText) {
        /**
         * Won't Work Here Coz Normal Function Does Not Use Lexical Scoping.
         */
        // this.items.forEach(function (item, index) {
        //     if (item.id === id) {
        //         this.items[index].text = newText;
        //     }
        // });

        /**
         * Solution: 1
         */
        // const self = this;
        // this.items.forEach(function (item, index) {
        //     if (item.id === id) {
        //         self.items[index].text = newText;
        //     }
        // });

        /**
         * Solution: 2
         */
        this.items.forEach((item, index) => {
            if (item.id === id) {
                this.items[index].text = newText;
            }
        });
    }
}

const state2 = new State2();
state2.updateText("2", "World Goes Here Updated Text!");
console.log(state2.items);

// Object Literals
const person = {
    name: 'Abhishek Baghel',
    age: 21,
    __repr__: function () {
        return `${this.name} is ${this.age} Year(s) Old.`
    },
    location: {
        city: 'Gwalior',
        state: 'MP',
        country: 'India',
        formattedAddress() {
            return `${this.city}, ${this.state} | ${this.country}`
        },
        // __repr__() {
        //     // Here This Refers To This location object not the person because normal function does not use lexical scoping.
        //     return `${this.name} lives in ${this.formattedAddress()}`
        // },
        __repr__: () => `${person.name} lives in ${person.location.formattedAddress()}`
    }
};

console.log(person.__repr__());
console.log(person.location.__repr__());