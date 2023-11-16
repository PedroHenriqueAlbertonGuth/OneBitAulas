const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Greffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

const townsClone = [...towns];

constole.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "test";

console.log({ townsObj, townsObjClone });
