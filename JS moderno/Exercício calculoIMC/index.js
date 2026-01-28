const imcCalculator = (weight, height) => {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("Peso e altura devem ser números.");
    } else if (height <= 0 || weight <= 0) {
      reject("Peso e altura devem ser maiores que zero.");
    } else {
      setTimeout(() => {
        const imc = weight / (height * height);
        resolve(imc);
      }, 1500);
    }
  });
};
const calculateIMC = (weight, height) => {
  imcCalculator(weight, height)
    .then((imc) => {
      if (imc < 18.5) {
        console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso`);
      } else if (imc >= 18.5 && imc < 24.9) {
        console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
      } else if (imc >= 25 && imc < 29.9) {
        console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`);
      } else if (imc >= 30 && imc < 34.9) {
        console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 1`);
      } else if (imc >= 35 && imc < 39.9) {
        console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 2`);
      } else {
        console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 3`);
      }
    })
    .catch((error) => {
      console.log("Erro ao calcular IMC:", error);
    });
  console.log("Cálculo de IMC iniciado...");
};
calculateIMC(96, 1.91); // Exemplo de uso
