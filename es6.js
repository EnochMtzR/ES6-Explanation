// ES6
// 1.- Introduce "let" keyword.
function a() {
  let b = 0;

  if (true) {
    let b = 5;
  }

  return b;
}

// 2.- Introduce "const" keyworkd.
function b() {
  const stringArray = ["hola", "mundo", "cruel"];

  stringArray[0] = "adios";

  return stringArray;
}

console.log(b());
