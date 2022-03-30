class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.amountChecker(amount);
    this.balance += amount;
    this.depositHistory(amount);
  }

  withdraw(amount) {
    this.amountChecker(amount);
    this.balance -= amount;
    this.withdrawHistory(amount);
  }

  get statement() {
    return `date || credit || debit || balance\n${this.transactions
      .reverse()
      .join("\n")}`;
  }

  get printStatement() {
    console.log(this.statement);
  }

  amountChecker(amount) {
    if (typeof amount != "number" || amount <= 0) {
      throw "Invalid amount, please enter a valid number";
    }
  }

  depositHistory(amount) {
    this.transactions.push(
      `${new Date().toLocaleDateString("en-GB")} || ${amount.toFixed(
        2
      )} || || ${this.balance.toFixed(2)}`
    );
  }

  withdrawHistory(amount) {
    this.transactions.push(
      `${new Date().toLocaleDateString("en-GB")} || || ${amount.toFixed(
        2
      )} || ${this.balance.toFixed(2)}`
    );
  }
}

module.exports = Account;
