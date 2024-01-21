const Character = require("./Character");
const Warrior = require("./Warrior");

class Thief extends Character {
  attackTarget(target) {
    if (target instanceof Character) {
      if (target.stance === "defense") {
        target.lifePoints -=
          (this.attack - target.defense + target.shieldPoints) * 2;
      } else {
        target.lifePoints -= (this.attack - target.defense) * 2;
      }
    } else {
      console.log(`Alvo inválido`);
    }
  }
}

module.exports = Thief;
