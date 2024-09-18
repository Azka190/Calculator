'use client';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
         'C'
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="text-2xl mb-4 text-center">Calculator</div>
        <div className="mb-4">
          <input
            className="w-full p-4 text-2xl text-right border rounded-lg mb-2"
            type="text"
            readOnly
            value={expression}
          />
          <input
            className="w-full p-4 text-2xl text-right border rounded-lg"
            type="text"
            readOnly
            value={result}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="p-4 bg-gray-200 text-xl font-semibold rounded-lg hover:bg-gray-300"
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
