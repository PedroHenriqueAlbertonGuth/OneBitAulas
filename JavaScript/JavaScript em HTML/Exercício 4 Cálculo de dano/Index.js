const characterOneName = prompt("Defina o nome do seu personagem: ")
const characterTwoName = prompt("Defina o nome do segundo personagem: ")
let characterTwoLife = Number(prompt("Qual a vida máxima de " + characterTwoName + "?"))
const characterTwoDefense = Number(prompt("Qual a defesa de " + characterTwoName + "?"))
const characterTwoShield = confirm(characterTwoName + " possui um escudo? Clique em OK para sim ou em Cancelar para não.")

do {
  let characterOnePower = Number(prompt("Defina o ataque do seu personagem: "))
  let totalDamage = 0
  let characterDamage = characterOnePower - characterTwoDefense
  if (characterOnePower > characterTwoDefense && characterTwoShield == false) {
    characterTwoLife -= characterDamage
    totalDamage += characterDamage
    alert("O seu ataque causou: " + characterDamage + " de dano! A vida atual de " + characterTwoName + " é de: " + characterTwoLife + ".")
  } else if (characterOnePower > characterTwoDefense && characterTwoShield == true) {
    characterTwoLife -= characterDamage/2
    totalDamage += characterDamage/2
    alert("O seu ataque causou: " + characterDamage/2 + " de dano! A vida atual de " + characterTwoName + " é de: " + characterTwoLife + ".")
  } else if (characterOnePower <= characterTwoDefense) {
    alert("O seu ataque não causou dano!")
  }
} while (characterTwoLife > 0);
alert("Parabéns, você conseguiu derrotar o terrível " + characterTwoName + "!")

