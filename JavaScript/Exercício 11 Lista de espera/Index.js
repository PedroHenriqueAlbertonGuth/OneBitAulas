let pacientWaitList = ["Matheus", "Pedro", "Davi"];
let listOrder = [];
for (let index = 0; index < pacientWaitList.length; index++) {
  listOrder.push(index + 1 + "- " + pacientWaitList[index]);
}

let promptOption = 4
do {
  promptOption = prompt(
    "Bem vindo ao consultório, a lista de espera é: \n" +
      listOrder.join("\n") +
      "\n \nO que deseja fazer? " +
      "\n1-Adicionar novo paciente" +
      "\n2-Consultar paciente" +
      "\n3-Sair"
  );
  promptOption = parseFloat(promptOption);
  if (promptOption === 1) {
    let newPacient = prompt("Digite o nome do novo paciente.");
    listOrder.push(listOrder.length+1 +
    "- " + newPacient);
    alert("Adicionado, aguarde sua senha.")
  } else if (promptOption === 2) {
    let pacientRemove = prompt("Deseja consultar um paciente? (Sim/Não)")
    if (pacientRemove === "Sim") {
      listOrder.shift()
      alert("Consultando...")
    } else {
      alert("Nenhum paciente consultado, retornando...")
    }
  } else if (promptOption === 3) {
    alert("Encerrando...")
  } else {
    alert("Opção inválida.")
  }
} while(promptOption !== 3);
