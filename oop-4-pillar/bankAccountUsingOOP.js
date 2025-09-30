class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    } else {
      console.log("Insufficient balance!");
    }
  }

  getBalance() {
    return `Current balance: ${this.#balance}`;
  }
}

const account = new BankAccount(500);
account.deposit(200); // Deposited: 200
account.withdraw(100); // Withdrawn: 100
console.log(account.getBalance()); // Current balance: 600
