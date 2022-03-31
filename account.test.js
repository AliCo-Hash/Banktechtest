const Account = require("./account");

describe("Account", () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it("has a starting balance of 0", () => {
    expect(account.balance).toBe(0);
  });

  it("can deposit money", () => {
    account.deposit(500.0);
    expect(account.balance).toBe(500.0);
  });

  it("can withdraw money", () => {
    account.deposit(500.0);
    account.withdraw(300.0);
    expect(account.balance).toBe(200.0);
  });

  it("checks that the statement function is returning the string", () => {
    account.deposit(1000.0);
    account.deposit(2000.0);
    account.withdraw(500.0);
    expect(account.statement).toBe(
      `date || credit || debit || balance\n${new Date().toLocaleDateString(
        "en-GB"
      )} || || 500.00 || 2500.00\n${new Date().toLocaleDateString(
        "en-GB"
      )} || 2000.00 || || 3000.00\n${new Date().toLocaleDateString(
        "en-GB"
      )} || 1000.00 || || 1000.00`
    );
  });

  it("saves depositHistory", () => {
    account.deposit(1000.0);
    expect(account.transactions).toEqual([
      `${new Date().toLocaleDateString("en-GB")} || 1000.00 || || 1000.00`,
    ]);
  });

  it("saves withdrawHistory", () => {
    account.deposit(1000.0);
    account.withdraw(500.0);
    expect(account.transactions).toEqual([
      `${new Date().toLocaleDateString("en-GB")} || 1000.00 || || 1000.00`,
      `${new Date().toLocaleDateString("en-GB")} || || 500.00 || 500.00`,
    ]);
  });

  it("throws an error if given amount is not a number", () => {
    expect(() => account.amountChecker("aafs-$%!")).toThrow(
      "Invalid amount, please enter a valid number"
    );
  });

  it("checks if entered amount is a number >", () => {
    expect(() => account.amountChecker(-120)).toThrow(
      "Invalid amount, please enter a valid number"
    );
  });
});
