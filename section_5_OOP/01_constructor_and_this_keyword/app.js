/**
 * Constructors & this keyword
 */
function Abhishek() {
    this.name = 'Abhishek Baghel';
}

const abhi = new Abhishek();

console.log(abhi);

function Person(name, dob) {
    this.name = name;
    console.log('Inside Person Contructor: ', this);
    this.dob = new Date(dob);

    this.calculateAge = function () {
        return new Date().getFullYear() - this.dob.getFullYear();
    }

    this.repr = function () {
        return `I'm ${this.name}`;
    }
}

console.log('Global Scope: ', this);
const dylan = new Person('Dylan Baghel', '6-06-1998')
console.log(dylan);
console.log(dylan.repr());
console.log(dylan.calculateAge());

const bittu = new Person('Bittu Baghel', '06-06-1997');
console.log(bittu);
console.log(bittu.repr());
console.log(bittu.calculateAge());