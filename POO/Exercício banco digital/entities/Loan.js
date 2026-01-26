module.exports = class Loan {
  static #loanInterestRate = 0.05;

  get loanInterestRate() {
    return Loan.#loanInterestRate;
  }
  set loanInterestRate(newRatePercent) {
    Loan.#loanInterestRate = newRatePercent / 100;
  }

  constructor(amount, installment, date = new Date()) {
    this.originalAmount = amount;
    this.amountToPay = amount + amount * Loan.#loanInterestRate;
    this.installment = installment;
    this.installmments = [];
    this.date = date;
    // Create installment instances and push to array
    for (
      let installmentNumber = 1;
      installmentNumber <= installment;
      installmentNumber++
    ) {
      const installmentAmount = this.amountToPay / installment;
      this.installmments.push(
        new (require("./Installment"))(installmentNumber, installmentAmount),
      );
    }
  }
};
