async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Both arguments must be numbers");
  }
  return a + b;
}

// async function execute() {
//   asyncSum(2, 3)
//     .then((result) => {
//       console.log("Sum Result:", result);
//     })
//     .catch((error) => {
//       console.log("Error in asyncSum:", error);
//     });
// }

// é igual a

async function execute() {
  try {
    const result = await asyncSum(2, null);
    console.log("Sum Result:", result);
  } catch (err) {
    console.log("Error in asyncSum:", err);
  }
}
execute();
// function asyncSubtract(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return Promise.reject("Both arguments must be numbers");
//   }
//   return a - b;
// }

// const sumResult = asyncSum(12, 1);
// const subtractResult = asyncSubtract(15, 5);
// Promise.all([sumResult, subtractResult])
//   .then((results) => {
//     const [sum, subtract] = results;
//     console.log(`Sum: ${sum}, Subtract: ${subtract}`);
//   })
//   .catch((error) => {
//     console.log("Error in one of the operations:", error);
//   });

// const numbers = [1, 2, 3, 4, 5];

// function asyncSquare(num) {
//   return num * num;
// }

// Promise.all(numbers.map((number) => asyncSquare(number)))
//   .then((squaredNumbers) => {
//     console.log("Squared Numbers:", squaredNumbers);
//   })
//   .catch((error) => {
//     console.log("Error squaring numbers:", error);
//   });
