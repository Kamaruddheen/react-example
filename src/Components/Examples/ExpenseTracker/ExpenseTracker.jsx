import React, { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (description && amount) {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setDescription("");
      setAmount("");
    }
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
