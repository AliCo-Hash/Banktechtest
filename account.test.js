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
})