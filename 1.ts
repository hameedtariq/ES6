// var hoisting
// has functional scope
// {
//   var greet = 'Hello';
// }
// console.log(greet);

// let has block scope
// is not hoisted
// {
//   let salutation = 'Mrs.';
// }
// throws error
// console.log(salutation);

// for loop variable being passed as a reference
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// using let for each callback function to
// maintain its own version of i
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// arrow function
// arrow function don't have a 'this' context
// const arrowFunc = () => {
//   return;
// };

// function with default parameters

function sum(a = 10, b = a * 0.1) {
  console.log(arguments.length);
  return a + b;
}

// sum(20, 20);

// working with rest operator
function restOperator(message: string, ...args: string[]) {
  console.log(message);

  for (const msg of args) {
    console.log(msg);
  }
}

// restOperator('Hello world', 'green', 'blue', 'red');

// spread operator
const spreadColors = ['green', 'blue', 'red'];
restOperator('Hello world', ...spreadColors);

// object literals
const ln = 'last name';
const person = {
  // can define methods this way
  breaths() {
    console.log('Breathing');
  },
  // can use variable values as keys
  [ln]: 'Tariq',
};
