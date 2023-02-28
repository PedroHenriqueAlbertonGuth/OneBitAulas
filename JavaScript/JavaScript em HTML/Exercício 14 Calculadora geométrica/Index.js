function areaTriangular(base, altura) {
  return (base * altura) / 2;
}

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCiculo(raio, pi = 3.14) {
  return pi * (raio * raio)
}

let opcaoPrompt = "5"
do {
  opcaoPrompt = prompt("Essa é a calculadora geométrica. \n" +
  "Que cálculo deseja fazer? \n \n" +
  "1. Área do triângulo \n" +
  "2. Área do retângulo \n" +
  "3. Área do quadrado \n" +
  "4. Área do trapézio \n" +
  "5. Área do círculo \n" +
  "6. Sair \n")
  if (opcaoPrompt === "1") {
    base = parseFloat(prompt("Qual o tamanho da base?"))
    altura = parseFloat(prompt("Qual o tamanho da altura?"))
    alert("O tamanho da área do triângulo é de " + areaTriangular(base, altura))
  } else if (opcaoPrompt === "2") {
    base = parseFloat(prompt("Qual o tamanho da base?"))
    altura = parseFloat(prompt("Qual o tamanho da altura?"))
    alert("O tamanho da área do retângulo é de " + areaRetangular(base, altura))
  } else if (opcaoPrompt === "3") {
    lado = parseFloat(prompt("Qual o tamanho do lado?"))
    alert("O tamanho da área do quadrado é de " + areaQuadrada(lado))
  } else if (opcaoPrompt === "4") {
    baseMaior = parseFloat(prompt("Qual o tamanho da base maior?"))
    baseMenor = parseFloat(prompt("Qual o tamanho da base menor?"))
    altura = parseFloat(prompt("Qual o tamanho da altura?"))
    alert("O tamanho da área do trapézio é de " + areaTrapezio(baseMaior, baseMenor, altura))
  } else if (opcaoPrompt === "5") {
    raio = parseFloat(prompt("Qual o tamanho do raio?"))
    alert("O tamanho da área é de " + areaCiculo(raio))
  } else if (opcaoPrompt === "6") {
    alert("Saindo...")
  } else {
    alert("Insíra um valor válido.")
  }
} while (opcaoPrompt !== "6");