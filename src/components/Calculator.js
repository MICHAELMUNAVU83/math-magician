import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  clickCalc = (e) => {
    const values = e.target.textContent;
    this.setState((obj) => calculate(obj, values));
  }

  render() {
    const { total, operation, next } = this.state;
    const results = `
    ${
  total || operation || next
    ? `${total || ''} ${operation || ''} ${next || ''}`
    : 0
}`;

    return (
      <div className="calcApp">
        <div className="output">
          {/* <div className="previous"></div> */}
          <div className="current">{results}</div>
        </div>

        <button type="button" onClick={this.clickCalc}>AC</button>
        <button type="button" onClick={this.clickCalc}>+/-</button>
        <button type="button" onClick={this.clickCalc}>%</button>
        <button type="button" className="operand" onClick={this.clickCalc}>÷</button>
        <button type="button" onClick={this.clickCalc}>7</button>
        <button type="button" onClick={this.clickCalc}>8</button>
        <button type="button" onClick={this.clickCalc}>9</button>
        <button type="button" onClick={this.clickCalc} className="operand">x</button>
        <button type="button" onClick={this.clickCalc}>4</button>
        <button type="button" onClick={this.clickCalc}>5</button>
        <button type="button" onClick={this.clickCalc}>6</button>
        <button type="button" className="operand" onClick={this.clickCalc}>-</button>
        <button type="button" onClick={this.clickCalc}>1</button>
        <button type="button" onClick={this.clickCalc}>2</button>
        <button type="button" onClick={this.clickCalc}>3</button>
        <button type="button" onClick={this.clickCalc} className="operand">+</button>
        <button type="button" onClick={this.clickCalc} className="span-two">0</button>
        <button type="button" onClick={this.clickCalc}>.</button>
        <button
          type="button"
          className="operand"
          onClick={this.clickCalc}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
