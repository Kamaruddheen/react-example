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

  const getTotalExpenses = () => {
    return expenses
      .reduce((total, expense) => total + expense.amount, 0)
      .toFixed(2);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      <button
        onClick={addExpense}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Add Expense
      </button>
      <ul className="mt-4">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between py-2 border-b">
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">
        Total Expenses: ${getTotalExpenses()}
      </h3>
    </div>
  );
};

export default ExpenseTracker;
