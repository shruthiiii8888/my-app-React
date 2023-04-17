
/*import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} Email: ${email}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '=':
        try {
          const res = eval(input);
          setResult(res);
          setInput(res.toString());
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'C':
        setResult(0);
        setInput('');
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || result}</div>
      <div className="buttons">
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="*" onClick={handleClick}>*</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="." onClick={handleClick}>.</button>
        <button value="/" onClick={handleClick}>/</button>
        <button value="C" onClick={handleClick}>C</button>
        <button value="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default App;
