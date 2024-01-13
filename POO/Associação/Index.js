const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de Setembro", 99, "Centro", "São Fidelis", "RJ");
// passando a variável como parâmetro, concluimos a associação
const john = new Person("John Doe", addr);

console.log(john);
console.log(john.address.fullAddress())
