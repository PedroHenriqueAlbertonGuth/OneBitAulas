const simpleMedia = (...numbers) => {
  return `A média simples de ${numbers} é ${(
    numbers.reduce((valorAcumulado, number) => valorAcumulado + number, 0) /
    numbers.length
  ).toFixed(2)}`;
};

console.log(simpleMedia(6, 8, 7, 9, 4, 10));

const ponderatedMedia = ([...numbers], [...weigth]) => {
  return `A média ponderada dos valores ${numbers} com respectivos pesos ${weigth} é ${
    numbers.reduce(
      (valorAcumulado, num, i) => valorAcumulado + num * weigth[i],
      0
    ) / weigth.reduce((valorAcumulado, num) => valorAcumulado + num, 0)
  }`;
};
console.log(ponderatedMedia([5, 7, 2], [2, 3, 1]));

const mediana = (...numbers) => {
  numbers.sort((a, b) => a - b);
  if (numbers.length % 2 === 0) {
    let numbersClone = [...numbers];
    let mediana = numbersClone.splice(numbersClone.length / 2 - 1, 2);
    mediana.reduce((accum, num) => accum + num, 0) / 2;
    return `A mediana dos valores ${numbers} é ${mediana}`;
  } else if (numbers.length % 2 === 1) {
    let numbersClone = [...numbers];
    let mediana = numbersClone.splice(numbersClone.length / 2, 1);
    return `A mediana dos valores ${numbers} é ${mediana[0]}`;
  }
};

console.log(mediana(11, 4, 5, 2, 10, 3));

const fashion = (...numbers) => {
  let maior = null;
  let ocorrenciasMaior = -1;
  for (let i = 0; i < numbers.length; i++) {
    let ocorrencia = 1;
    for (let t = i + 1; t < numbers.length; t++) {
      if (numbers[i] == numbers[t]) {
        ocorrencia++;
      }
    }
    if (ocorrencia > ocorrenciasMaior) {
      maior = numbers[i];
      ocorrenciasMaior = ocorrencia;
    }
  }
  return `A moda dos valores ${numbers} é ${maior}, que ocorreu ${ocorrenciasMaior} vezes`;
};

console.log(fashion(1, 2, 1, 2, 3, 4, 5, 4, 5, 3, 4, 6));
