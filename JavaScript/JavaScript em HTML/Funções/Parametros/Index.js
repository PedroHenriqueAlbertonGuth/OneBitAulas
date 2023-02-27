function dobro(x) {
  alert("O dobro de " + x + " é " + (x*2))
}

//dobro(5)

//dobro()

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!")
}

dizerOla("Pedro")
dizerOla()

function soma(a, b) {
  alert("O resultado da soma é: " + (a + b))
}

soma(7, 3)
soma(1, 1)

function criarUsuario(nome, email, senha, tipoDeUsuario = "admin") {
  const usuario = {
    nome, //mesmo que nome: nome
    email,
    senha,
    tipoDeUsuario,
  }

  console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", email, senha) {
  const usuario = {
    nome, //mesmo que nome: nome
    email,
    senha,
    tipo,
  }

  console.log(usuario)
}

