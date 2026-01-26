class App {
  static #users = [];
  static get users() {
    return this.#users;
  }

  static findUserByCPF(cpf) {
    return this.#users.find((user) => user.cpf === cpf);
  }
  static newUser(name, cpf, birthDate, email) {
    const userAlreadyExists = this.findUserByCPF(cpf);
    if (userAlreadyExists) {
      throw new Error("User with this CPF already exists.");
    } else {
      const newUser = new (require("./entities/User"))(
        name,
        cpf,
        birthDate,
        email,
      );
      App.users.push(newUser);
      return newUser;
    }
  }
  static newLoanToUser(cpf, amount, installment) {
    const user = App.findUserByCPF(cpf);
    if (!user) {
      throw new Error("User not found.");
    } else {
      user.account.newLoan(amount, installment);
    }
  }
  static newDepositToUser(cpf, amount) {
    const user = App.findUserByCPF(cpf);
    if (!user) {
      throw new Error("User not found.");
    } else {
      user.account.newDeposit(amount);
    }
  }
  static newTransferBetweenUsers(originCPF, destinationCPF, amount) {
    const originUser = App.findUserByCPF(originCPF);
    const destinationUser = App.findUserByCPF(destinationCPF);
    if (!originUser) {
      throw new Error("Origin user not found.");
    }
    if (!destinationUser) {
      throw new Error("Destination user not found.");
    }
    originUser.account.newTransfer(destinationUser, amount);
  }
  static changeLoanFee(newRatePercent) {
    const Loan = require("./entities/Loan");
    Loan.prototype.loanInterestRate = newRatePercent;
  }
}
module.exports = App;
