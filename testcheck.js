const Account = require('./account');
let account = new Account


account.deposit(1000.00)
console.log(account.balance)
account.deposit(2000.00)
account.withdraw(500.00)
console.log(account.balance)
console.log(account.transactions.reverse())
console.log('')

// console.log('date || credit || debit || balance')
console.log(account.transactions.reverse().join('\n'))

console.log('')

console.log(account.statement())