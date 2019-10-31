// ES6
class Person {
  constructor(name) {
    this.name = name;
    this.canTalk = true;
  }

  sayHi() {
    if (this.canTalk) console.log(`Hi my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, profession) {
    super(name);
    this.profession = profession;
  }

  sayHi() {
    if (this.canTalk)
      console.log(`Hi my name is ${this.name}, and I am a ${this.profession}`);
  }
}

class Mime extends Employee {
  constructor(name) {
    super(name, "Mime");
    this.canTalk = false;
  }
}

const Josias = new Person("Josias");
Josias.sayHi();

const Abner = new Employee("Abner", "Programmer");
Abner.sayHi();

const mikyMime = new Mime("Miky");
mikyMime.sayHi();
