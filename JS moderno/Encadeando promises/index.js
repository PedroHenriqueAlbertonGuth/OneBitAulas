function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Maior de idade");
      } else {
        reject("Menor de idade");
      }
    }, 1000);
  });
}

function getAge(birthYear) {
  return new Promise((resolve, reject) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    if (age >= 0) {
      resolve(age);
    } else {
      reject("Ano de nascimento inválido");
    }
  });
}
getAge(2005)
  .then((age) =>
    checkAge(age).then((message) => {
      console.log(`Idade: ${age} - ${message}`);
    }),
  )
  .catch((error) => {
    console.log("Erro ao obter idade:", error);
  });
