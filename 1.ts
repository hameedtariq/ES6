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
