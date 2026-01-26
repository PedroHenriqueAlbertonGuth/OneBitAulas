module.exports = class Installment {
  constructor(number, amount, paid = false, paymentDate = null) {
    this.number = number;
    this.amount = amount;
    this.paid = paid;
    this.paymentDate = paymentDate;
  }
};
