// const book = {
//   title: "Revendo objetos",
//   pages: 264,
//   published: true,
//   inStock: 30,
//   tags: ["JavaScript", "ES6", "Objetos"],
//   author: {
//     name: "Paulo Lopes",
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   },
// };

function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function (quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    console.log(`O livro ${this.title} foi salvo!`);
  };
}

const book = new Book(
  "Revendo objetos",
  264,
  ["JavaScript", "ES6", "Objetos"],
  { name: "Paulo Lopes" },
);

console.log(book);

book.addOnStock(5);
console.log(`Estoque atual: ${book.inStock}`);

book.save = function () {
  console.log(`O livro ${this.title} foi salvo!`);
};
book.save();
console.log(book);
