  let availableMoney = Number(prompt("Quanto dinheiro disponível você tem?"))

do {
  let optionPrompt = prompt("Você tem R$" +availableMoney+ ". O que deseja fazer?" +
  "\n1-Depositar dinheiro" +
  "\n2-Sacar dinheiro" +
  "\n3-Sair")
  if (optionPrompt == 1) {
    let deposit = Number(prompt("Quanto dinheiro você quer depositar?"))
    availableMoney += deposit
  } else if (optionPrompt == 2) {
    let withdraw = Number(prompt("Quanto dinheiro você quer sacar?"))
    availableMoney -= withdraw
  } else if (optionPrompt == 3) {
    alert("Encerrando operação...")
    break
  }
} while (availableMoney > 0);

if (availableMoney == 0) {
  alert("Você não tem dinheiro disponível")
} else {
  alert("Volte sempre!")
}