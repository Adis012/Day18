function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* 6, 7, 8;
}

function* generatorArray() {
    yield [1, 2, 3, 4, 5, 'A', 'r', 'e', 'n', 'a', 6, 7, 8];
}

const iterator = myGenerator(9, 10);

console.log(iterator.next({value: 1, done: false}));
console.log(iterator.next({value: 2, done: false}));
console.log(iterator.next({value: 3, done: false}));
console.log(iterator.next({value: 4, done: false}));
console.log(iterator.next({value: 5, done: false}));
console.log(iterator.next({value: 'A', done: false}));
console.log(iterator.next({value: 'r', done: false}));
console.log(iterator.next({value: 'e', done: false}));
console.log(iterator.next({value: 'n', done: false}));
console.log(iterator.next({value: 'a', done: false}));
console.log(iterator.next({value: 6, done: false}));
console.log(iterator.next({value: 7, done: false}));
console.log(iterator.next({value: 8, done: false}));

module.exports = { generatorArray, myGenerator};