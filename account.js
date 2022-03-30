class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(
      `${new Date().toLocaleDateString("en-GB")} || ${amount.toFixed(
        2
      )} || || ${this.balance.toFixed(2)}`
    );
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(
      `${new Date().toLocaleDateString("en-GB")} || || ${amount.toFixed(
        2
      )} || ${this.balance.toFixed(2)}`
    );
  }

  get statement() {
    return `date || credit || debit || balance\n${this.transactions
      .reverse()
      .join("\n")}`;
  }

  get printStatement() {
    console.log(this.statement);
  }
}

module.exports = Account;
