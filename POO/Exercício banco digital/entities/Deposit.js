module.exports = class Deposit {
  constructor(amount, date = new Date()) {
    this.amount = amount;
    this.date = date;
  }
};
