// uso principal: No generan "this".

class Person {
  constructor(name) {
    this.name = name;
  }

  wait() {
    setTimeout(() => {
      console.log(`${this.name} is waiting...`);
    }, 1000);
  }
}

// function sumaCinco(a) {
//   return a + 5;
//}

function a() {
  return a;
}

let sumaCinco = a => a + 5;

let returnObject = () => ({
  name: "josias",
  age: 22
});

console.log(returnObject());
