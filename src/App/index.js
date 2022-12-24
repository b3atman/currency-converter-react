import { useState } from 'react';
import './app.css';
import { Form } from './Form';
import { currencies } from './currencies';
import { Date } from "./Date";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <div className="app">
      <Date />
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
};

export default App;
