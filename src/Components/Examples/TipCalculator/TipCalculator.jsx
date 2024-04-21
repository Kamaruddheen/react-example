import React, { useState } from "react";
import "./TipCalculator.css";

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
    <div className="tip-calculator">
      <h2>Tip Calculator</h2>
      <div>
        <label>Bill Amount: </label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div>
        <label>Tip Percentage: </label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
      </div>
      <button onClick={calculateTip}>Calculate</button>
      <div>
        <p>Tip Amount: ${tipAmount.toFixed(2)}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TipCalculator;
