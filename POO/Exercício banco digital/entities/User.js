module.exports = class User {
  #cpf = "";
  #email = "";

  get cpf() {
    return this.#cpf;
  }
  get email() {
    return this.#email;
  }
  constructor(name, cpf, birthDate, email) {
    this.name = name;
    this.#cpf = cpf;
    this.birthDate = birthDate;
    this.#email = email;
    this.account = new (require("./Account"))(this);
  }
};
