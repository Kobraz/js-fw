import { useState } from 'react';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  function incrementCounterValue() {
    setCounterValue((prevState) => prevState + 1);
  }

  function decrementCounterValue() {
    setCounterValue((prevState) => prevState - 1);
  }

  function resetCounterValue() {
    setCounterValue(0);
  }

  return (
    <div>
      <h2>Counter:</h2>
      <div>{counterValue}</div>
      <button onClick={decrementCounterValue}>-</button>
      <button onClick={resetCounterValue}>0</button>
      <button onClick={incrementCounterValue}>+</button>
    </div>
  );
}

export default Counter;
