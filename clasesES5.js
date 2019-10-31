//ES5

// class Person
function Person(name) {
  // constructor
  this.name = name;
  this.canTalk = true;
}

Person.prototype.sayHi = function() {
  if (this.canTalk) console.log(`Hello, my name is ${this.name}`);
};

// class Employee
function Employee(name, profession) {}
Employee.prototype = Person.prototype;

const Josias = new Person("josias");
Josias.sayHi();
