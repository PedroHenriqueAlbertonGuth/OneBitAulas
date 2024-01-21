class Character {
  constructor(name, lifePoints, attack, defense) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.attack = attack;
    this.defense = defense;
  }

  attackTarget(target) {
    if (target instanceof Character) {
      if (target.stance === "defense") {
        target.lifePoints -= this.attack - target.defense + target.shieldPoints;
      } else {
        target.lifePoints -= this.attack - target.defense;
      }
    } else {
      console.log(`Alvo inválido`);
    }
  }
}

module.exports = Character;
