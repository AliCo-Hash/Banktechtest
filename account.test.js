const Account = require('./account');

describe('Account', () => {
  it('has a starting balance of 0', () => {
    let account = new Account
    expect(account.balance).toBe(0)
  })
})