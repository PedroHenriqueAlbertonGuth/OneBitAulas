const book = {
  title: "Eragon",
  pages: 468,
  published: true,
  inStock: 20,
  tags: ["fantasy", "adventure", "medieval"],
  author: {
    name: "Christopher Paolini",
  },
  // podemos adicionar métodos ao objeto, são funções que não precisam da palavra function inicial
  addOnStock(quantify) {
    this.inStock += quantify;
  },
};

// PascalCase - padrão para funções construtoras
function Book(title, pages, tags, author) {
  // passando o this o javascript entende que vai devolver um objeto
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function addOnStock(quantify) {
    this.inStock += quantify;
  };
  this.save = function () {
    //salva no banco de dados
  };
}
const author = { name: "Christopher Paolini" };
const tags = ["fantasy", "adventure", "medieval"];
// usamos o new para chamar funções construtoras
const eragon = new Book("Eragon", 468, tags, author);

const eldest = new Book("Eldest", 644, tags, author);
// title está atribuido a variável book, que é um objeto
// um objeto pode ter múltiplas propriedades, que podem conter inúmeros valores,
// funções, arrays, objetos, string...
console.log(book.title);
// podemos usar métodos (funções) colocadas dentro do objeto, para aumentar o estoque do objeto, por exemplo
book.addOnStock(30);

console.log(book.inStock);
// podemos colocar funções anônimas dentro de propriedades do objeto, por fora do objeto em si

book.save = function () {
  // salva no banco de dados
};
console.log(eragon);
console.log(eldest);
// os objetos criados pela função construtora recebem um "tipo", que é o nome da função
