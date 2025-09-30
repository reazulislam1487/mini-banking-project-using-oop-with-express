import express from "express";

class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposited: ${amount}`;
    }
    return "Invalid deposit amount!";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return `Withdrawn: ${amount}`;
    } else {
      return "Insufficient balance!";
    }
  }

  getBalance() {
    return `Current balance: ${this.#balance}`;
  }
}

// Initial account with 500 balance
const account = new BankAccount(500);

const app = express();
app.use(express.json());

// Get balance
app.get("/balance", (req, res) => {
  res.json({ balance: account.getBalance() });
});

// Deposit money
app.post("/deposit", (req, res) => {
  const { amount } = req.body;
  const message = account.deposit(amount);
  res.json({ message, balance: account.getBalance() });
});

// Withdraw money
app.post("/withdraw", (req, res) => {
  const { amount } = req.body;
  const message = account.withdraw(amount);
  res.json({ message, balance: account.getBalance() });
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
