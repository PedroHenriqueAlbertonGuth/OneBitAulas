async function calculateIMC(weight, height) {
  try {
    return await imcCalculator(weight, height).then((imc) => {
      if (imc < 18.5) console.log(`IMC: ${imc.toFixed(2)} - Abaixo do peso`);
      else if (imc >= 18.5 && imc < 24.9)
        console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
      else if (imc >= 25 && imc < 29.9)
        console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`);
      else if (imc >= 30 && imc < 34.9)
        console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 1`);
      else if (imc >= 35 && imc < 39.9)
        console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 2`);
      else console.log(`IMC: ${imc.toFixed(2)} - Obesidade grau 3`);
    });
  } catch (err) {
    console.log("Erro ao calcular IMC:", err);
  }
}
async function imcCalculator(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    throw "Peso e altura devem ser números.";
  } else if (height <= 0 || weight <= 0) {
    throw "Peso e altura devem ser maiores que zero.";
  } else {
    console.log("Cálculo de IMC iniciado...");
    return weight / (height * height);
  }
}

calculateIMC(96, 1.91); // Exemplo de uso
calculateIMC(85, 0); // Exemplo de uso
