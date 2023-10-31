const palindromoInput = prompt("Digite uma palavra para verificar se ela é um palindromo.")
let ordemInvertida = ""

for (var i = palindromoInput.length - 1; i >= 0; i--) {
  ordemInvertida += palindromoInput[i]
}
console.log(ordemInvertida)

if(ordemInvertida == palindromoInput) {
  alert("A palavra " + palindromoInput + " é um palindromo!"+
  "\n \n" + palindromoInput + " = " +ordemInvertida)
} else {
  alert("A palavra " + palindromoInput + " não é um palindromo." +
  "\n \n" + palindromoInput + " = " +ordemInvertida)
}