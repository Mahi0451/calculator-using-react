import React, {useState} from "react";
import "..//style.css";



const States1 = () => {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleValidation = () => {
    // Check if input fields are not empty
    if (num2.trim() === '' || num1.trim() === '') {
      setError('Error! field cannot be empty');
      return false;
    }
    
    // Check if numbers are valid (either integers or floating-point numbers)
    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setError('Error: Not a valid numbers');
      return false;
    }

    return true;
  };

  const handleOperation = (operation) => {
    if (!handleValidation()) {
      setResult('');
      return;
    }


    let result;
    let errorMessage = '';

    // Perform arithmetic operation based on the operation parameter
    switch (operation) {
      case 'addition':
        errorMessage = 'Success!'
        result = parseFloat(num1) + parseFloat(num2);
        setResult(result);
        break;

      case 'subtraction':
        errorMessage = 'Success!'
        result = parseFloat(num1) - parseFloat(num2);
        setResult(result);
        break;

      case 'multiplication':
        errorMessage = 'Success!'
        result = parseFloat(num1) * parseFloat(num2);
        setResult(result);
        break;

      case 'division':
        if (parseFloat(num2) === 0) {
          errorMessage = 'Error: Cannot divide by zero';
          setError(errorMessage);
        } 

        else {
          errorMessage = 'Success!'
          result = parseFloat(num1) / parseFloat(num2);
          setResult(result);
        }

        break;
      default:
    }

          setError(errorMessage);
          setResult(result);
          
        };





  return (
    <div className="box">
      <h1>React Calculator</h1>
      <input type="text" placeholder=" Num 1" onChange={(e) => setNum1(e.target.value)} />
      <input type="text" placeholder=" Num 2" onChange={(e) => setNum2(e.target.value)} /><br/>
      <button onClick={() => handleOperation('addition')}>+</button>
      <button onClick={() => handleOperation('subtraction')}>-</button>
      <button onClick={() => handleOperation('multiplication')}>*</button>
      <button onClick={() => handleOperation('division')}>/</button><br/><br/>
      {error && <div style={{ color: 'red'}}>{error}</div>}<br/>
      {<div>Result: {result}</div>
      }
    </div>
  );
};



export default States1;
