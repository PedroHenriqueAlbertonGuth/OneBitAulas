const carOneName = prompt("Insira o nome do seu carro: ")
const carOneSpeed = Number(prompt("Insira a velocidade do seu carro: "))
const carTwoName = prompt("Insira o nome do seu carro: ")
const carTwoSpeed = Number(prompt("Insira a velocidade do seu carro: "))


if (carOneSpeed > carTwoSpeed) {
  alert("O " + carOneName + " é o mais rápido!")
} else if (carOneSpeed < carTwoSpeed) {
  alert("O " + carTwoName + " é o mais rápido!")
} else if (carOneSpeed == carTwoSpeed) {
  alert("Os carros estão na mesma velocidade!")
} else {
  alert("Insira valores válidos!")

}