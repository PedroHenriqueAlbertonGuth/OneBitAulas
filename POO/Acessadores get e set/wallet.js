class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100; //remove as casas decimais
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUserName) {
    if (typeof newUserName === "string") {
      this.#username = newUserName;
    } else {
      console.log("O nome de usuário deve ser uma string.");
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

myWallet.username = 1;
console.log(myWallet.username);
myWallet.username += ".dev";
console.log(myWallet.username);
