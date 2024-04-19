import React, { Component } from "react";
import "./advancedCalculator.css";

class AdvancedCalculator extends Component {
  state = {
    display: "0",
    expression: "",
    memory: 0,
    isNewNumber: true,
    showHistory: false,
    history: [],
  };

  operations = {
    square: (n) => Math.pow(n, 2),
    sqrt: (n) => Math.sqrt(n),
    sin: (n) => Math.sin(this.toRadians(n)),
    cos: (n) => Math.cos(this.toRadians(n)),
    log: (n) => Math.log10(n),
    ln: (n) => Math.log(n),
  };

  toRadians = (degrees) => degrees * (Math.PI / 180);

  handleNumber = (number) => {
    const { display, isNewNumber } = this.state;

    if (isNewNumber || display === "0") {
      this.setState({
        display: number.toString(),
        isNewNumber: false,
      });
    } else {
      this.setState({
        display: display + number,
      });
    }
  };

  handleDecimal = () => {
    const { display, isNewNumber } = this.state;

    if (isNewNumber) {
      this.setState({
        display: "0.",
        isNewNumber: false,
      });
    } else if (!display.includes(".")) {
      this.setState({
        display: display + ".",
      });
    }
  };

  handleOperation = (op) => {
    const { display, expression } = this.state;
    this.setState({
      expression: expression + display + op,
      isNewNumber: true,
    });
  };

  handleSpecialOperation = (operation) => {
    const { display } = this.state;
    const number = parseFloat(display);
    const result = this.operations[operation](number);

    this.setState({
      display: result.toString(),
      isNewNumber: true,
      history: [...this.state.history, `${operation}(${number}) = ${result}`],
    });
  };

  handleEqual = () => {
    try {
      const { display, expression } = this.state;
      const fullExpression = expression + display;
      const result = eval(fullExpression); // Note: eval is used for simplicity, consider using a safer alternative in production

      this.setState({
        display: result.toString(),
        expression: "",
        isNewNumber: true,
        history: [...this.state.history, `${fullExpression} = ${result}`],
      });
    } catch (error) {
      this.setState({
        display: "Error",
        expression: "",
        isNewNumber: true,
      });
    }
  };

  handleMemory = (action) => {
    const { memory, display } = this.state;
    const currentValue = parseFloat(display);

    switch (action) {
      case "M+":
        this.setState({ memory: memory + currentValue, isNewNumber: true });
        break;
      case "M-":
        this.setState({ memory: memory - currentValue, isNewNumber: true });
        break;
      case "MR":
        this.setState({ display: memory.toString(), isNewNumber: true });
        break;
      case "MC":
        this.setState({ memory: 0 });
        break;
      default:
        break;
    }
  };

  handleClear = () => {
    this.setState({
      display: "0",
      expression: "",
      isNewNumber: true,
    });
  };

  toggleHistory = () => {
    this.setState((prevState) => ({
      showHistory: !prevState.showHistory,
    }));
  };

  render() {
    const { display, showHistory, history, memory } = this.state;

    return (
      <div className="advanced-calculator-container">
        <div className="calculator-main">
          <div className="calculator-display">
            <div className="memory-indicator">{memory !== 0 && "M"}</div>
            <div className="calculator-screen">{display}</div>
          </div>

          <div className="calculator-grid">
            {/* Memory Operations */}
            <button
              onClick={() => this.handleMemory("MC")}
              className="btn-memory"
            >
              MC
            </button>
            <button
              onClick={() => this.handleMemory("MR")}
              className="btn-memory"
            >
              MR
            </button>
            <button
              onClick={() => this.handleMemory("M+")}
              className="btn-memory"
            >
              M+
            </button>
            <button
              onClick={() => this.handleMemory("M-")}
              className="btn-memory"
            >
              M-
            </button>

            {/* Scientific Operations */}
            <button
              onClick={() => this.handleSpecialOperation("square")}
              className="btn-function"
            >
              x²
            </button>
            <button
              onClick={() => this.handleSpecialOperation("sqrt")}
              className="btn-function"
            >
              √
            </button>
            <button
              onClick={() => this.handleSpecialOperation("sin")}
              className="btn-function"
            >
              sin
            </button>
            <button
              onClick={() => this.handleSpecialOperation("cos")}
              className="btn-function"
            >
              cos
            </button>

            {/* Numbers and Basic Operations */}
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

            <button onClick={() => this.handleNumber(0)} className="btn">
              0
            </button>
            <button onClick={this.handleDecimal} className="btn">
              .
            </button>
            <button onClick={this.handleEqual} className="btn-equal">
              =
            </button>
            <button
              onClick={() => this.handleOperation("+")}
              className="btn-orange"
            >
              +
            </button>

            <button onClick={this.handleClear} className="btn-clear col-span-2">
              Clear
            </button>
            <button
              onClick={this.toggleHistory}
              className="btn-function col-span-2"
            >
              History
            </button>
          </div>
        </div>

        {showHistory && (
          <div className="calculator-history">
            <h3 className="history-title">History</h3>
            <div className="history-list">
              {history.map((entry, index) => (
                <div key={index} className="history-item">
                  {entry}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdvancedCalculator;
