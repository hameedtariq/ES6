"use strict";
// var hoisting
// has functional scope
{
    var greet = 'Hello';
}
console.log(greet);
// let has block scope
// is not hoisted
{
    let salutation = 'Mrs.';
}
// throws error
// console.log(salutation);
//# sourceMappingURL=1.js.map