module.exports = class Transfer {
  constructor(originAccount, destinationAccount, amount, date = new Date()) {
    this.originAccount = originAccount;
    this.destinationAccount = destinationAccount;
    this.amount = amount;
    this.date = date;
  }
};
