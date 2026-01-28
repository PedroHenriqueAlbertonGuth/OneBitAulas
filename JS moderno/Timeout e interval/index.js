console.log("Programa iniciado");

const timeoutId = setTimeout(() => {
  console.log("Executando callback do setTimeout após 2 segundos");
}, 2000);

clearTimeout(timeoutId);
console.log("Timeout cancelado antes de ser executado");

let count = 0;
const intervalId = setInterval(() => {
  count += 1;
  console.log(`Executando callback do setInterval: ${count}`);
  if (count > 4) {
    clearInterval(intervalId);
    console.log("Intervalo cancelado após 5 execuções");
  }
}, 1000);
