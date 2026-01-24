const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(
    name,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0,
  ) {
    super(`Livro: ${name}`, description, price, inStock);
    this.name = name;
    this.synopsis = synopsis;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
};
