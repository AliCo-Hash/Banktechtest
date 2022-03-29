class Account {
  constructor() {
    this.balance = 0
    this.transactions = []
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`${new Date().toLocaleDateString('en-GB')} || ${(amount).toFixed(2)} || || ${(this.balance).toFixed(2)}`)
    return this.balance
  }
  
  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(`${new Date().toLocaleDateString('en-GB')} || || ${(amount).toFixed(2)} || ${(this.balance).toFixed(2)}`)
    return this.balance
  }
  
  statement() {
    return (`date || credit || debit || balance\n${this.transactions.reverse().join("\n")}`);
  }
}

module.exports = Account