class Planet {
  name: string;

  constructor(nome) {
    this.name = nome;
  }

  @Log()
  calculate(value: number) {
    //...
    return value * 2;
  }

  @Log()
  invertName() {
    return this.name.split("").reverse().join("");
  }
}

function Log() {
  return function (target, key, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("------------------------");
      console.log(
        `Estamos chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`,
      );
      const result = originalMethod.apply(this, args);
      console.log(
        `O método ${key} retornou o valor: ${JSON.stringify(result)}`,
      );
      console.log("------------------------");
      return result;
    };
  };
}

const planet = new Planet("terra");

const result = planet.calculate(2);

console.log(result);
planet.invertName();
