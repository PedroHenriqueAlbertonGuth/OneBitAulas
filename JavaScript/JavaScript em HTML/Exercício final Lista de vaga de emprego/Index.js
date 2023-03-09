const vagasDisponiveis = [
  {
    nomeVaga: "Vaga 1",
    descricaoVaga: "Descrição 1",
    dataLimite: "10/10/1010",
    nomeCandidato: ["Pedro"],
    quantidadeIncritos: 1,
  },
];
let menuPrompt = "7";
alert("Inicializando sistema...");

do {
  menuPrompt = prompt(
    "Sistema de vagas inciado, o que deseja fazer? \n \n" +
      "1. Listar vagas disponíveis. \n" +
      "2. Criar uma nova vaga. \n" +
      "3. Visualizar uma vaga. \n" +
      "4. Inscrever candidato. \n" +
      "5. Excluir uma vaga. \n" +
      "6. Sair."
  );

  if (menuPrompt === "1") {
    const listaVagas = vagasDisponiveis.map(function (vaga, index) {
      return (
        [index + 1] +
        ". " +
        vaga.nomeVaga +
        ", quantidade de incritos: " +
        vaga.quantidadeIncritos
      );
    });
    console.log(listaVagas)
    if (vagasDisponiveis[0] === undefined) {
      alert("Não há vagas disponíveis.");
    } else {
      alert("As vagas disponíveis são: \n" + listaVagas);
    }
  } else if (menuPrompt === "2") {
    let novaVaga = {
      nomeVaga: prompt("Qual o nome da vaga?"),
      descricaoVaga: prompt("Descreva a vaga."),
      dataLimite: prompt("Qual a data limite da vaga?"),
      nomeCandidato: [],
      quantidadeIncritos: 0,
    };
    let confirmacao = "Aoba";
    do {
      confirmacao = prompt(
        "Você confirma as informações? (Sim/Não) \n \n" +
          "Nome da vaga: " +
          novaVaga.nomeVaga +
          "\n" +
          "Descrição da vaga: " +
          novaVaga.descricaoVaga +
          "\n" +
          "Data limite: " +
          novaVaga.dataLimite
      );
      if (confirmacao === "Sim") {
        alert("Vaga criada com sucesso!");
        vagasDisponiveis.push(novaVaga);
        break;
      } else if (confirmacao === "Não") {
        alert("Retornando...");
        break;
      } else {
        alert("Insira apenas Sim ou Não");
      }
    } while (confirmacao !== "Sim" || "Não");
  } else if (menuPrompt === "3") {
    let indiceVaga = prompt(
      "Qual o número da vaga que deseja ver? Para saber o número volte e selecione a opção 1"
    );
    indiceVaga = parseFloat(indiceVaga);
    const informacoesVaga = vagasDisponiveis[indiceVaga - 1];
    console.log(informacoesVaga);
    if (informacoesVaga === undefined) {
      alert("Vaga inexistente.");
    } else {
      alert(
        "Indíce: " +
          indiceVaga +
          "\n Nome da vaga: " +
          informacoesVaga.nomeVaga +
          "\n Descrição: " +
          informacoesVaga.descricaoVaga +
          "\n Data limite: " +
          informacoesVaga.dataLimite +
          "\n Quantidade de candidatos: " +
          informacoesVaga.quantidadeIncritos +
          "\n Nome dos candidatos: " +
          informacoesVaga.nomeCandidato
      );
    }
  } else if (menuPrompt === "4") {
    const nomeCandidato = prompt("Qual o nome do candidato?");
    let indiceVaga = prompt(
      "Qual o número da vaga que deseja ver? Para saber o número volte e selecione a opção 1"
    );
    indiceVaga = parseFloat(indiceVaga);
    const informacoesVaga = vagasDisponiveis[indiceVaga - 1];
    let confirmacao = "Aoba";
    do {
      confirmacao = prompt(
        "Indíce: " +
          indiceVaga +
          "\n Nome da vaga: " +
          informacoesVaga.nomeVaga +
          "\n Descrição: " +
          informacoesVaga.descricaoVaga +
          "\n Data limite: " +
          informacoesVaga.dataLimite +
          "\n Quantidade de candidatos: " +
          informacoesVaga.quantidadeIncritos +
          "\n Nome dos candidatos: " +
          informacoesVaga.nomeCandidato +
          "\n \n Deseja adicionar o candidato " +
          nomeCandidato +
          " à vaga? (Sim/Não)"
      );
      if (confirmacao === "Sim") {
        vagasDisponiveis[indiceVaga - 1].nomeCandidato.push(nomeCandidato);
        vagasDisponiveis[indiceVaga - 1].quantidadeIncritos++;
        alert("Candidato adicionado!");
        break;
      } else if (confirmacao === "Não") {
        alert("Retornando...");
        break;
      } else {
        alert("Insira um valor válido, apenas Sim ou Não.");
      }
    } while (confirmacao !== "Sim" || "Não");
  } else if (menuPrompt === "5") {
    let indiceVaga = prompt(
      "Qual o número da vaga que deseja excluir? Para saber o número volte e selecione a opção 1"
    );
    indiceVaga = parseFloat(indiceVaga);
    const vaga = vagasDisponiveis[indiceVaga - 1];
    let confirmacao = "Aoba";
    do {
      confirmacao = prompt(
        "Deseja realmente excluir essa vaga? (Sim/Não) \n" +
          "Indíce: " +
          indiceVaga +
          "\n Nome da vaga: " +
          vaga.nomeVaga +
          "\n Descrição: " +
          vaga.descricaoVaga +
          "\n Data limite: " +
          vaga.dataLimite +
          "\n Quantidade de candidatos: " +
          vaga.quantidadeIncritos +
          "\n Nome dos candidatos: " +
          vaga.nomeCandidato
      );
      if (confirmacao === "Sim") {
        vagasDisponiveis.splice(indiceVaga - 1, 1);
        alert("Vaga excluída com sucesso!");
        break;
      } else if (confirmacao === "Não") {
        alert("Retornando...");
        break;
      } else {
        alert("Insira um valor válido, apenas Sim ou Não.");
      }
    } while (confirmacao !== "Sim" || "Não");
  } else if (menuPrompt === "6") {
    alert("Saindo do sistema...");
  } else {
    alert("Insira um valor válido");
  }
} while (menuPrompt !== "6");
