import { useState } from 'react';
import './Index.css';

const numbers = ['1', '2', '3','+', '4', '5', '6','-', '7', '8', '9','*', 'C', '0', '/','='];

const renderNumbers = (handleClick) => {
  return numbers.map((number) => (
    <button
      key={number}
      type="button"
      className="m-2 p-3 pl-5 pr-7 bg-blue-500 text-white rounded-xl hover:bg-slate-500 hover:border-slate-900 hover:border-l"
      onClick={() => handleClick(number)}
    >
      {number}
    </button>
  ));
};

export default function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        const result = new Function(`return ${input}`)();
        setInput(result);
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="box-content min-w-screen flex flex-col items-center bg-slate-600 w-60 h-96 mt-40 p-5 rounded-xl ml-auto mr-auto shadow-xl shadow-slate-800">
      <h1 className="text-2xl font-bold">Calculator</h1>
      <input className="w-full p-2 m-4 rounded-lg text-center" type="text" value={input} readOnly />
      <div className="grid grid-cols-4">{renderNumbers(handleClick)}</div>
    </div>
  );
}