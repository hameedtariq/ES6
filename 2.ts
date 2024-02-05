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
// prototype' inheritance
function Admin(...args: [string, string]) {
  User.apply(this, args);
  this.role = 'super admin';
}
Admin.prototype = Object.create(User.prototype);
*/
