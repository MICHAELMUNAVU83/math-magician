import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../Calculator.css';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const clickCalc = (e) => {
    const values = e.target.textContent;
    setCalc((obj) => calculate(obj, values));
  };

  const results = `
    ${
  calc.total || calc.operation || calc.next
    ? `${calc.total || ''} ${calc.operation || ''} ${calc.next || ''}`
    : 0
}`;

  return (
    <div className="calcApp">
      <div className="output">
        {/* <div className="previous"></div> */}
        <div className="current">{results}</div>
      </div>

      <button type="button" onClick={clickCalc}>AC</button>
      <button type="button" onClick={clickCalc}>+/-</button>
      <button type="button" onClick={clickCalc}>%</button>
      <button type="button" onClick={clickCalc} className="operand">
        ÷
      </button>
      <button type="button" onClick={clickCalc}>7</button>
      <button type="button" onClick={clickCalc}>8</button>
      <button type="button" onClick={clickCalc}>9</button>
      <button type="button" onClick={clickCalc} className="operand">
        x
      </button>
      <button type="button" onClick={clickCalc}>4</button>
      <button type="button" onClick={clickCalc}>5</button>
      <button type="button" onClick={clickCalc}>6</button>
      <button type="button" onClick={clickCalc} className="operand">
        -
      </button>
      <button type="button" onClick={clickCalc}>1</button>
      <button type="button" onClick={clickCalc}>2</button>
      <button type="button" onClick={clickCalc}>3</button>
      <button type="button" onClick={clickCalc} className="operand">
        +
      </button>
      <button type="button" onClick={clickCalc} className="span-two">
        0
      </button>
      <button type="button" onClick={clickCalc}>.</button>
      <button type="button" onClick={clickCalc} className="operand">
        =
      </button>
    </div>
  );
};

export default Calculator;
