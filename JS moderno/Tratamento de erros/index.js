function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return a + b;
}

try {
  console.log(sum(2, 3)); // 5
  console.log(sum(2, "3")); // This will throw an error
} catch (error) {
  if (error instanceof TypeError) {
    console.error("TypeError caught:", error.message);
  } else {
    console.error("An unexpected error occurred:", error);
  }
} finally {
  console.log("Execution of the try-catch block is complete.");
}

console.log("Execution continues after error handling.");
