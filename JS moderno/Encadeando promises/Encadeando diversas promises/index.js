function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Both arguments must be numbers");
    } else {
      setTimeout(() => {
        resolve(a + b);
      }, 1000);
    }
  });
}
function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Both arguments must be numbers");
    } else {
      setTimeout(() => {
        resolve(a - b);
      }, 1000);
    }
  });
}

const sumResult = asyncSum(12, 1);
const subtractResult = asyncSubtract(15, 5);
Promise.all([sumResult, subtractResult])
  .then((results) => {
    const [sum, subtract] = results;
    console.log(`Sum: ${sum}, Subtract: ${subtract}`);
  })
  .catch((error) => {
    console.log("Error in one of the operations:", error);
  });

const numbers = [1, 2, 3, 4, 5];

function asyncSquare(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Argument must be a number");
    } else {
      setTimeout(() => {
        resolve(num * num);
      }, 500);
    }
  });
}

Promise.all(numbers.map((number) => asyncSquare(number)))
  .then((squaredNumbers) => {
    console.log("Squared Numbers:", squaredNumbers);
  })
  .catch((error) => {
    console.log("Error squaring numbers:", error);
  });
