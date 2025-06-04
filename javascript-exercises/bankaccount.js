class BankAccount {
  #balance = 0; //  Private — can't be touched directly

  constructor(owner) {
    this.owner = owner;
  }

  //  Get the current balance
  get balance() {
    return this.#balance;
  }

  //  Deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    } else {
      console.warn("Deposit must be a positive number.");
    }
  }

  //  Withdraw money
  withdraw(amount) {
    if (amount <= 0) {
      console.warn("Withdrawal must be a positive number.");
    } else if (amount > this.#balance) {
      console.warn("Insufficient funds.");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    }
  }
}
