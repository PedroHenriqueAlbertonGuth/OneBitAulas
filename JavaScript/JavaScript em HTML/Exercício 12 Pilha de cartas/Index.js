let cardStack = ["O louco", "O hermitão", "O mago", "O mundo"]
console.log(cardStack)

let promptOption = 0
do {
  promptOption = prompt("Atuais cartas no baralho: \n" + cardStack.join("\n") 
  + "\nO que deseja fazer?" +
  "\n1-Adicionar uma carta" +
  "\n2-Puxar uma carta" +
  "\n3-Sair")
  promptOption = parseFloat(promptOption)

  if(promptOption === 1) {
    let newCard = prompt("Qual o nome da carta adicional?")
    cardStack.unshift(newCard)
    alert("A carta " + newCard + " foi adicionada!")
  } else if (promptOption === 2) {
    if (cardStack.length > 0) {
    let drawnCard = cardStack.shift()
    alert("Você puxou a carta " + drawnCard)
    } else {
      alert("As cartas acabaram! Adicione mais ou saia para recolocar as cartas.")
    }
  } else if (promptOption === 3) {
    alert("Saindo...")
  } else {
    alert("Valor inválido")
  }
} while (promptOption !== 3);