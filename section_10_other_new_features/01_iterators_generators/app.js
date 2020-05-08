/**
 * Iterators & Generators
 */

// Iterator
function nameIterator(...names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }
        }
    };
}

const namesArray = ['Jack', 'Jill', 'John'];
const names = nameIterator(...namesArray);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

// Generator
function* sayNames() {
    yield 'Jack';
    yield 'Jill';
    yield 'John';
}

const name = sayNames();
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());

function* createIds() {
    let index = 0;

    while(true) {
        yield index++;
    }
}
const genId = createIds();

console.log(genId.next().value);
console.log(genId.next().value);
console.log(genId.next().value);
console.log(genId.next().value);
console.log(genId.next().value);