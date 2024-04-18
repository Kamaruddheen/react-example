import React, { Component } from "react";
import "./calculator.css";

class Calculator extends Component {
  state = {
    display: "0",
    firstNumber: null,
    operation: null,
    newNumberStarted: false,
  };

  handleNumber = (number) => {
    const { display, newNumberStarted } = this.state;

    if (display === "0" || newNumberStarted) {
      this.setState({
        display: number.toString(),
        newNumberStarted: false,
      });
    } else {
      this.setState({
        display: display + number,
      });
    }
  };

  handleOperation = (op) => {
    this.setState({
      firstNumber: parseFloat(this.state.display),
      operation: op,
      newNumberStarted: true,
    });
  };

  handleEqual = () => {
    const { firstNumber, operation, display } = this.state;
    const secondNumber = parseFloat(display);
    let result;

    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        return;
    }

    this.setState({
      display: result.toString(),
      firstNumber: null,
      operation: null,
      newNumberStarted: true,
    });
  };

  handleClear = () => {
    this.setState({
      display: "0",
      firstNumber: null,
      operation: null,
      newNumberStarted: false,
    });
  };

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator-display">
          <div className="calculator-screen">{this.state.display}</div>
        </div>

        <div className="calculator-grid">
          {/* Numbers */}
          <button onClick={() => this.handleNumber(7)} className="btn">
            7
          </button>
          <button onClick={() => this.handleNumber(8)} className="btn">
            8
          </button>
          <button onClick={() => this.handleNumber(9)} className="btn">
            9
          </button>
          <button
            onClick={() => this.handleOperation("/")}
            className="btn-orange"
          >
            /
          </button>

          <button onClick={() => this.handleNumber(4)} className="btn">
            4
          </button>
          <button onClick={() => this.handleNumber(5)} className="btn">
            5
          </button>
          <button onClick={() => this.handleNumber(6)} className="btn">
            6
          </button>
          <button
            onClick={() => this.handleOperation("*")}
            className="btn-orange"
          >
            ×
          </button>

          <button onClick={() => this.handleNumber(1)} className="btn">
            1
          </button>
          <button onClick={() => this.handleNumber(2)} className="btn">
            2
          </button>
          <button onClick={() => this.handleNumber(3)} className="btn">
            3
          </button>
          <button
            onClick={() => this.handleOperation("-")}
            className="btn-orange"
          >
            -
          </button>

          <button
            onClick={() => this.handleNumber(0)}
            className="btn btn-span-2"
          >
            0
          </button>
          <button onClick={this.handleEqual} className="btn">
            =
          </button>
          <button
            onClick={() => this.handleOperation("+")}
            className="btn-orange"
          >
            +
          </button>

          <button onClick={this.handleClear} className="btn btn-span-4">
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
