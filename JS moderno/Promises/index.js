// const p = new Promise((resolve, reject) => {
//   console.log("Promise executada");
//   setTimeout(() => {
//     if (true) {
//       reject("Erro: Algo deu errado!");
//     }
//     resolve("Promise resolvida após 2 segundos");
//   }, 2000);
// });
// console.log(p);
// p.catch((error) => console.log(error));

// o uso comum de promises é dentro de funções
function execute() {
  return new Promise((resolve, reject) => {
    if (true) {
      reject("Erro: Algo deu errado na função!");
    } else {
      setTimeout(() => {
        resolve("Função executada com sucesso!");
      }, 1500);
    }
  });
}

execute()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finalizando a execução da promise.");
  });
