const array = ["Josias", "Abner", "Liz", "Ramiro", "Ana", "Enoc"];
const numArray = [1, -1, 2, 5, 10, -24, -30, 50, 6, 100];
const objArray = [
  { name: "jos", age: 22 },
  { name: "abner", age: 20 },
  { name: "enoc", age: 24 }
];

array.forEach(element => {
  console.log(`Hi ${element}`);
});

const withLastNames = array.map(element => {
  return element + " Martinez";
});

console.log(withLastNames);

const filtered = numArray.filter(element => {
  return element % 2 !== 0;
});

const sorted = numArray.sort((el1, el2) => {
  return el1 > el2;
});

const sum = numArray.reduce((sum, current) => {
  return current % 2 === 0 ? sum + current : 0;
});

const some = numArray.some(element => {
  return element === 20;
});

const every = numArray.every(element => {
  return element > 0;
});

const find = objArray.find(element => {
  return element.name === "enoc";
});

const findIndex = objArray.findIndex(element => {
  return element.name === "abner";
});

console.log(findIndex);
