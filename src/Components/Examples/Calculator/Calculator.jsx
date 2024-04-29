import React, { Component } from "react";
import "./calculator.css";

class Calculator extends Component {
  state = {
    display: "0",
    firstNumber: null,
    operation: null,
    isNewNumber: false,
  };

  handleNumber = (number) => {
    this.setState((prevState) => {
      const { display, isNewNumber } = prevState;

      if (display === "0" || isNewNumber) {
        return {
          display: number.toString(),
          isNewNumber: false,
        };
      } else {
        return {
          display: display + number,
        };
      }
    });
  };

  handleOperation = (op) => {
    this.setState((prevState) => ({
      firstNumber: parseFloat(prevState.display),
      operation: op,
      isNewNumber: true,
    }));
  };

  handleEqual = () => {
    this.setState((prevState) => {
      const { firstNumber, operation, display } = prevState;
      const secondNumber = parseFloat(display);
      let result;

      const ADD = "+";
      const SUBTRACT = "-";
      const MULTIPLY = "*";
      const DIVIDE = "/";

      switch (operation) {
        case ADD:
          result = firstNumber + secondNumber;
          break;
        case SUBTRACT:
          result = firstNumber - secondNumber;
          break;
        case MULTIPLY:
          result = firstNumber * secondNumber;
          break;
        case DIVIDE:
          if (secondNumber === 0) {
            alert("Error: Division by zero");
            return;
          }
          result = firstNumber / secondNumber;
          break;
        default:
          return;
      }

      return {
        display: result.toString(),
        firstNumber: null,
        operation: null,
        isNewNumber: true,
      };
    });
  };

  handleClear = () => {
    this.setState({
      display: "0",
      firstNumber: null,
      operation: null,
      isNewNumber: false,
    });
  };

  renderButton(number, className = "btn") {
    return (
      <button onClick={() => this.handleNumber(number)} className={className}>
        {number}
      </button>
    );
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator-display">
          <div className="calculator-screen">{this.state.display}</div>
        </div>

        <div className="calculator-grid">
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          <button
            onClick={() => this.handleOperation("/")}
            className="btn-orange"
          >
            /
          </button>

          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          <button
            onClick={() => this.handleOperation("*")}
            className="btn-orange"
          >
            ×
          </button>

          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          <button
            onClick={() => this.handleOperation("-")}
            className="btn-orange"
          >
            -
          </button>

          {this.renderButton(0, "btn btn-span-2")}
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
