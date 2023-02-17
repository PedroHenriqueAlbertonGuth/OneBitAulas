const numberInput = prompt("Insira o número que deseja saber a tabuada: ")
let tabuada = ""

for (let i = 0; i <= 20; i++) {
  tabuada += numberInput +" x " + i + " = " + numberInput * i + "\n"
  console.log(i)
}

alert("A tabuada de " + numberInput + " é: \n" + tabuada)