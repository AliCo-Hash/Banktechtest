const Account = require('./account');

describe('Account', () => {
  let account

  beforeEach(() => {
    account = new Account
  })

  it('has a starting balance of 0', () => {
    expect(account.balance).toBe(0)
  })

  it('can deposit money', () => {
    account.deposit(500.00)
    expect(account.balance).toBe(500.00)
  })

  it('can withdraw money', () => {
    account.deposit(500.00)
    account.withdraw(300.00)
    expect(account.balance).toBe(200.00)
  })

  it('can print a statement', () => {
    account.deposit(1000.00)
    account.deposit(2000.00)
    account.withdraw(500.00)
    expect(account.statement()).toBe(
      `date || credit || debit || balance\n${new Date().toLocaleDateString('en-GB')} || || 500.00 || 2500.00\n${new Date().toLocaleDateString('en-GB')} || 2000.00 || || 3000.00\n${new Date().toLocaleDateString('en-GB')} || 1000.00 || || 1000.00`
    )
  })
})