let a = true;
isTrue = () => (a ? "it's true" : "it's false");
console.log(isTrue());
a = !a;
console.log(isTrue());
