const Database = require("./Database");

module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const User = require("./entities/User");
    const user = new User(name, email, password);
    App.#database.save("users", user);
  }
  getUsers() {
    return App.#database.findAll("users");
  }

  createAuthor(name, nationality, bio) {
    const Author = require("./entities/Author");
    const author = new Author(name, nationality, bio);
    App.#database.save("authors", author);
  }
  getAuthors() {
    return App.#database.findAll("authors");
  }

  createBook(
    name,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0,
  ) {
    const Book = require("./entities/Book");
    const book = new Book(
      name,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock,
    );
    App.#database.save("books", book);
  }
  getBooks() {
    return App.#database.findAll("books");
  }
  createPoster(name, description, height, width, price, inStock = 0) {
    const Poster = require("./entities/Poster");
    const poster = new Poster(name, description, height, width, price, inStock);
    App.#database.save("posters", poster);
  }
  getPosters() {
    return App.#database.findAll("posters");
  }
  addStock(type, name, quantity) {
    if (type === "book") {
      App.#database.addProductStock("books", name, quantity);
    } else if (type === "poster") {
      App.#database.addProductStock("posters", name, quantity);
    } else {
      console.log("Invalid product type. Valid types are 'book' and 'poster'.");
    }
  }

  createOrder(items, userEmail) {
    const Order = require("./entities/Order");
    const user = App.#database.findAll("users", userEmail);
    const order = new Order(items, user, App.#database);
    App.#database.save("orders", order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof require("./entities/Book")) {
        App.#database.removeProductStock("books", product.name, quantity);
      } else if (product instanceof require("./entities/Poster")) {
        App.#database.removeProductStock("posters", product.name, quantity);
      }
    });
  }
  getOrders() {
    return App.#database.findAll("orders");
  }
  showDatabase() {
    App.#database.showStorage();
  }
};
