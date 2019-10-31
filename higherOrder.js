function a(num) {
  return b => {
    return num + b;
  };
}

const suma = a(5);

console.log(suma(5));

function thisWillBeExecutedAfter() {
  console.log("after 1 sec.");
}

setTimeout(thisWillBeExecutedAfter, 1000);

// function timeOut(fn, timeOut) {
//     for (i = 0; i < timeOut; i++) {
//       for (j = 0; j < timeOut; j++) {
//         for (x = 0; x < timeOut; x++) {
//           //
//         }
//       }
//     }
//     fn();
//   }

//   function fn() {
//     console.log("finished...");
//   }

//   timeOut(fn, 1000);
