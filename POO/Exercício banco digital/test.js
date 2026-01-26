const App = require("./App");

App.newUser("Pedro H A Guth", "05757627999", "1990-05-15", "pedro@email.com");
App.newUser("Lucas Queiroga", "05757627998", "1990-05-15", "lucas@email.com");
App.newUser("Juliana Conde", "05757627997", "1990-05-15", "juliana@email.com");

App.newDepositToUser("05757627999", 100);
App.newTransferBetweenUsers("05757627999", "05757627998", 20, App);

App.changeLoanFee(10);
App.newLoanToUser("05757627997", 2000, 24);

console.log(App.findUserByCPF("05757627999"));
console.log(App.findUserByCPF("05757627999").account);
console.log(App.findUserByCPF("05757627998"));
console.log(App.findUserByCPF("05757627998").account);
console.log(App.findUserByCPF("05757627997"));
console.log(App.findUserByCPF("05757627997").account);
console.log(App.findUserByCPF("05757627997").account.loans[0].installmments[0]);
