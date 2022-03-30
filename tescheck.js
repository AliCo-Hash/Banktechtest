const Account = require("./account");
const account = new Account();

account.deposit(1000.0);
account.deposit(2000.0);
account.withdraw(500.0);

account.printStatement;
