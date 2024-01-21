const Character = require("./Character");
const Warrior = require("./Warrior");

class Mage extends Character {
  constructor(name, lifePoints, attack, defense, magicPoints) {
    super(name, lifePoints, attack, defense);
    this.magicPoints = magicPoints;
  }
  attackTarget(target) {
    if (target instanceof Character) {
      if (target.stance === "defense") {
        target.lifePoints -=
          this.attack + this.magicPoints - target.defense + target.shieldPoints;
      } else {
        target.lifePoints -= this.attack + this.magicPoints - target.defense;
      }
    } else {
      console.log(`Alvo inválido`);
    }
  }
  heal(target) {
    if (target instanceof Character) {
      target.lifePoints += this.magicPoints * 2;
    } else {
      console.log(`Alvo inválido`);
    }
  }
}

module.exports = Mage;
