const App = require("../App");

module.exports = class Account {
  constructor(accountHolder) {
    this.accountNumber = Math.floor(Math.random() * 100);
    this.accountHolder = accountHolder;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }
  #balance = 0;
  get balance() {
    return this.#balance;
  }

  newDeposit(amount) {
    this.#balance += amount;
    this.deposits.push(new (require("./Deposit"))(amount));
  }
  newLoan(amount, installment) {
    const loan = new (require("./Loan"))(amount, installment);
    this.loans.push(loan);
    this.#balance += amount;
  }
  newTransfer(destinationUser, amount) {
    if (amount > this.#balance) {
      console.log("Saldo insuficiente para transferência.");
      return;
    } else if (destinationUser.accountNumber === this.accountNumber) {
      console.log("Não é possível transferir para a mesma conta.");
      return;
    } else {
      this.#balance -= amount;
      destinationUser.account.#balance += amount;
      const transfer = new (require("./Transfer"))(
        this,
        destinationUser,
        amount,
      );
      this.transfers.push(transfer);
    }
  }
};
