let pessoa = {
  nome: "Pedro",
  idade: 20,
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome)
  }
}

console.log(pessoa)

pessoa.dizerOla()