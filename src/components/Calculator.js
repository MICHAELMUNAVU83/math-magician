import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calcApp">
        <div className="output">
          <div className="previous" />
          <div className="current" />
        </div>

        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operand">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operand">*</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operand">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operand">+</button>
        <button type="button" className="span-two">0</button>
        <button type="button">.</button>
        <button type="button" className="operand">=</button>

      </div>

    );
  }
}

export default Calculator;
