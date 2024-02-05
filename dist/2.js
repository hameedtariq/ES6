"use strict";
// classes are functions
/*
class Person {}
console.log(typeof Person);
*/
// classes unlike funtions are not hoisted
//throws an error
/*
const e = new Employee();
class Employee {}
*/
// lets discuss prototypes
// using generator functions
/*
function User(name: string, email: string) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.name} ${this.email}`);
};

let user = new User('Hello', 'Mello');

user.login();
*/
//# sourceMappingURL=2.js.map