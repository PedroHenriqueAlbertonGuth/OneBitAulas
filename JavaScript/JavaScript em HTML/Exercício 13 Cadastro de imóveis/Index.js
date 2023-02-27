let imoveis = [];
let imovel = {
  nomeDoProprietário: "Pedro",
  quantidadeQuartos: 2,
  quantidadeBanheiros: 3,
  possuiGaragem: "Sim",
};
imoveis.push(imovel);

let opcaoPrompt = 5;
do {
  opcaoPrompt = prompt(
    "Olá, bem vindo ao cadastro de imóveis! \nO total de imóveis cadastrados é: " +
      imoveis.length +
      "\nO que deseja fazer? \n1. Cadastrar novo imóvel. \n2.Ver imóveis salvos. \n3. Sair."
  );
  opcaoPrompt = parseFloat(opcaoPrompt);

  if (opcaoPrompt === 1){
    let novoImovel = {
      nomeDoProprietário: prompt("Qual o nome do dono do imóvel?"),
      quantidadeQuartos: parseFloat(prompt("Quantos quartos tem?")),
      quantidadeBanheiros: parseFloat(prompt("Quantos banheiros tem?")),
      possuiGaragem: prompt("O imóvel tem garagem? (Sim/Não)"),
    }
    alert("Salvando novo imóvel...")
    imoveis.push(novoImovel)
  } else if (opcaoPrompt === 2) {
    for (let  i = 0; i  < imoveis.length; i++){
      alert("O " + [i+1] + "° imóvel cadastrado é: \n" + "Imóvel do " + imoveis[i].nomeDoProprietário +
      "\nQuantidade de quartos: " + imoveis[i].quantidadeQuartos +
      "\nQuantidade de banheiros: " + imoveis[i].quantidadeBanheiros +
      "\nPossui garagem: " + imoveis[i].possuiGaragem)
    }
  } else if (opcaoPrompt === 3) {
    alert("Saindo...")
  } else {
    alert("Insira uma opção válida!")
  }
} while (opcaoPrompt !== 3);
