import React, { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(15);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTip = () => {
    const billValue = parseFloat(bill);
    if (!isNaN(billValue)) {
      const tip = (billValue * tipPercentage) / 100;
      setTipAmount(tip);
      setTotalAmount(billValue + tip);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Tip Calculator</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Bill Amount:</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tip Percentage:</label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      <button
        onClick={calculateTip}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Calculate
      </button>
      <div className="mt-4">
        <p className="text-gray-700">Tip Amount: ${tipAmount.toFixed(2)}</p>
        <p className="text-gray-700">Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TipCalculator;
