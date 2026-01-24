module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    users: [],
    orders: [],
    posters: [],
  };

  findAll(key) {
    return this.#storage[key];
  }
  // Método para encontrar um item da Database pelo nome
  find(key, name) {
    return this.#storage[key].find((item) => item.name === name);
  }
  // Método para salvar um item na Database
  save(key, value) {
    if (key === "users") {
      const userExists = this.#storage.users.find(
        (u) => u.email === value.email,
      );
      if (!userExists) {
        this.#storage.users.push(value);
      } else {
        throw new Error("User with this email already exists.");
      }
    } else if (key === "orders") {
      this.#storage.orders.push(value);
      return;
    } else {
      const exists = this.#storage[key].find(
        (item) => item.name === value.name,
      );
      if (!exists) {
        this.#storage[key].push(value);
      } else {
        throw new Error(`${key.slice(0, -1)} with this name already exists.`);
      }
    }
  }
  // Métodos para adicionar estoque de um objeto da classe produto
  addProductStock = (type, title, quantity) => {
    this.find(type, title)?.addToStock(quantity);
  };
  // Método para remover estoque de um objeto da classe produto
  removeProductStock = (type, title, quantity) => {
    this.find(type, title)?.removeFromStock(quantity);
  };

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
