const Character = require("./Character");

class Warrior extends Character {
  constructor(name, lifePoints, attack, defense, shieldPoints) {
    super(name, lifePoints, attack, defense);
    this.shieldPoints = shieldPoints;
  }
  stance = "attack";
  attackTarget(target) {
    if (target instanceof Character) {
      if (this.stance === "attack") {
        if (target.stance === "defense") {
          target.lifePoints -=
            this.attack - target.defense + target.shieldPoints;
        } else {
          target.lifePoints -= this.attack - target.defense;
        }
      } else {
        console.log(
          "Posição inválida, mude para a posição de ataque antes de atacar."
        );
      }
    } else {
      console.log(`Alvo inválido`);
    }
  }
  stanceChange() {
    if (this.stance === "attack") {
      this.stance = "defense";
    } else {
      this.stance = "attack";
    }
  }
}

module.exports = Warrior;
