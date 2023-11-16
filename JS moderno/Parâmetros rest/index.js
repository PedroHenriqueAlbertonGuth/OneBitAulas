function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 5, 7, 11, 13));
