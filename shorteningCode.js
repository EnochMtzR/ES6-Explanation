// if (true) console.log("true");
// else console.log("false");

// true ? console.log("true") : console.log("false");

function a(a) {
  return a;
}

b = a => a;

function c(a) {
  // if (a !== null || a !== undefined) const b = a;
  const b = a || 20;
  return b;
}

console.log(c(0));

// console.log(!!null);
// console.log(!!undefined);
// console.log(!!"");
// console.log(!!0);
