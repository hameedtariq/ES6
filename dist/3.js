"use strict";
// sets in js
let s = new Set();
s.add(1);
s.add('hello');
// console.log(s.has(1));
// console.log(s.has('1'));
// map in js
let m = new Map();
m.set('Hello', 'World');
for (const x of m) {
    // console.log(x[0], x[1]);
}
function* generator() {
    let count = 0;
    count++;
    yield count;
    count++;
    yield count;
}
// iterators and iterable
class IterableClass {
    [Symbol.iterator]() {
        let g = generator();
        // return an iterator object
        // that contains the next method
        return g;
        // return {
        //   next() {
        //     // next method should return an object with two properties
        //     // value and done
        //     return count < 2
        //       ? {
        //           value: count++,
        //           done: false,
        //         }
        //       : {
        //           value: undefined,
        //           done: true,
        //         };
        //   },
        // };
    }
}
let i = new IterableClass();
// uses iterators under the hood
for (const v of i) {
    console.log(v);
}
// generators in js
// function* createGen() {
//   yield 1;
//   yield 2;
// }
// const it = createGen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
//# sourceMappingURL=3.js.map