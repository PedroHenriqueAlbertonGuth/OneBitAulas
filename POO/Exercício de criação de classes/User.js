class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log(`Login sucedido.`);
    } else {
      console.log(`Email ou senha errados.`);
    }
  }
}

const pedro = new User(
  "Pedro Henrique Alberton Guth",
  "pedro@gmail.com",
  "12345678"
);

pedro.login("pedro@gmail.com", "1234568");
