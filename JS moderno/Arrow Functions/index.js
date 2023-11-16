function normalSum(a, b) {
  return a + b;
}

console.loh(`Soma normal: ${normalSum(2, 2)}`);

const anonymousSum = function (a, b) {
  return a + b;
};

console.log(`Soma anônima: ${anonymousSum(2, 3)}`);

const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma arrow function: ${arrowSum(3, 5)}`);

const subtract = (a, b) => a - b;

console.log(`Subtração: ${subtract(4, 3)}`);

const double = (n) => `O dobro de ${n} é ${n * 2}`;

const number = 21;
console.log(double(number));

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Greffen"];

const startingWithP = towns.filter((town) => town[0] === "P");

console.log(startingWithP);
