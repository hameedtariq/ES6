// sets in js
let s = new Set<number | string>();

s.add(1);
s.add('hello');

// console.log(s.has(1));
// console.log(s.has('1'));

// map in js
let m = new Map<string, string>();
m.set('Hello', 'World');

for (const x of m) {
  // console.log(x[0], x[1]);
}

// iterators and iterable
class IterableClass {
  [Symbol.iterator]() {
    let count = 0;
    // return an iterator object
    // that contains the next method
    return {
      next() {
        // next method should return an object with two properties
        // value and done
        return count < 2
          ? {
              value: count++,
              done: false,
            }
          : {
              value: undefined,
              done: true,
            };
      },
    };
  }
}
let i = new IterableClass();
// uses iterators under the hood
for (const v of i) {
  console.log(v);
}
