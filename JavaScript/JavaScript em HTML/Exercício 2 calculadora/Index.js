alert("Insira os valores que deseja calcular");

let x = Number(window.prompt("Insira o primeiro número:", ""));
let y = Number(window.prompt("Insira o segundo número:", ""));

let soma = x + y;
let minus = x - y;
let multiplication = x * y;
let division = (x / y).toFixed(2);

alert("A soma dos valores é: " + soma + ", a subtração é: " + minus + ", a multiplicação é: " + multiplication + " e a divisão é: " + division + ".");