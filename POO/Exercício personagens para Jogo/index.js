const Character = require("./Character");
const Thief = require("./Thief");
const Mage = require("./Mage");
const Warrior = require("./Warrior");

const john = new Character("John", 10, 2, 2);
const jonas = new Thief("Jonas", 12, 4, 1);
const gale = new Mage("Gale", 10, 1, 2, 4);
const laezel = new Warrior("Laezel", 16, 3, 2, 2);

john.attackTarget(jonas);
console.log(jonas.lifePoints);
jonas.attackTarget(gale);
console.log(gale.lifePoints);
gale.attackTarget(laezel);
console.log(laezel.lifePoints);
laezel.attackTarget(john);
console.log(john.lifePoints);
laezel.stanceChange();
gale.heal(laezel);
jonas.attackTarget(laezel);
console.log(laezel);
laezel.attackTarget(gale);
