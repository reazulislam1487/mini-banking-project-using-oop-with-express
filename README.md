# 🏦 BankAccount API (Express.js + OOP)

This is a simple **Bank Account Management API** built with **Express.js** using **OOP principles (Encapsulation)** in JavaScript.  
It demonstrates how to manage private account data securely with deposit, withdraw, and balance check features.

---

## 🚀 Features

- Encapsulation with private class fields (#balance)
- Deposit money into the account
- Withdraw money with validation
- Get current account balance
- REST API built using **Express.js**

---

## ⚙️ Installation & Setup

1. Clone the repository:
   git clone https://github.com/reazulislam1487/mini-banking-project-using-oop-with-express
   cd mini-banking-project-using-oop-with-express

2. Install dependencies:
   npm install express

3. Run the server:
   node index.js

4. Server will start at:
   http://localhost:5000

---

## 📡 API Endpoints

### 1️⃣ Get Balance

- GET /balance
- Response:
  { "balance": "Current balance: 500" }

### 2️⃣ Deposit Money

- POST /deposit
- Body: { "amount": 200 }
- Response:
  { "message": "Deposited: 200", "balance": "Current balance: 700" }

### 3️⃣ Withdraw Money

- POST /withdraw
- Body: { "amount": 100 }
- Response:
  { "message": "Withdrawn: 100", "balance": "Current balance: 600" }

---

👨‍💻 Author: Reazul Islam Reaz
\*/
