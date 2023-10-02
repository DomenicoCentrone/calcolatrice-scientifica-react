import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('0');
    const [prevValue, setPrevValue] = useState(null);
    const [operation, setOperation] = useState(null);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const appendValue = (value) => {
        if (input === '0' && value !== '.') {
            setInput(value);
        } else {
            setInput(prev => prev + value);
        }
    };
    

    const setOperator = (operator) => {
        if (input) {
            setPrevValue(input);
            setInput('');
            setOperation(operator);
        }
    };

    const calculate = () => {
        if (prevValue && operation && input) {
            let result;
            const prev = parseFloat(prevValue);
            const curr = parseFloat(input);

            switch (operation) {
                case '+':
                    result = prev + curr;
                    break;
                case '-':
                    result = prev - curr;
                    break;
                case '*':
                    result = prev * curr;
                    break;
                case '/':
                    result = prev / curr;
                    break;
                default:
                    return;
            }

            setInput(result.toString());
            setOperation(null);
            setPrevValue(null);
        }
    };

    const resetCalculator = () => {
        setInput('0');
        setPrevValue(null);
        setOperation(null);
    };

    const invertSign = () => {
        const currentValue = parseFloat(input);
        if (!isNaN(currentValue)) {
            setInput((currentValue * -1).toString());
        }
    };

    const toPercentage = () => {
        const currentValue = parseFloat(input);
        if (!isNaN(currentValue)) {
            setInput((currentValue / 100).toString());
        }
    };
    
    

    return (
        <div className="calculator">
            <input type="text" value={input} onChange={handleInput} className="display"/>
            <div className="buttons">
                <button onClick={resetCalculator}>AC</button>
                <button onClick={invertSign}>+/-</button>
                <button onClick={toPercentage}>%</button>

                <button data-operation onClick={() => setOperator('/')}>/</button>

                <button onClick={() => appendValue('7')}>7</button>
                <button onClick={() => appendValue('8')}>8</button>
                <button onClick={() => appendValue('9')}>9</button>
                <button data-operation onClick={() => setOperator('*')}>X</button>

                <button onClick={() => appendValue('4')}>4</button>
                <button onClick={() => appendValue('5')}>5</button>
                <button onClick={() => appendValue('6')}>6</button>
                <button data-operation onClick={() => setOperator('-')}>-</button>

                <button onClick={() => appendValue('1')}>1</button>
                <button onClick={() => appendValue('2')}>2</button>
                <button onClick={() => appendValue('3')}>3</button>
                <button data-operation onClick={() => setOperator('+')}>+</button>

                <button className="zero-button" onClick={() => appendValue('0')}>0</button>
                <button onClick={() => appendValue('.')}>.</button>
                <button data-operation onClick={calculate}>=</button>
            </div>

        </div>
    );
}

export default Calculator;
