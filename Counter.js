import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > -5) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <p>Name: Sai Deekshitha</p>
      <p>Roll No: 2211CS010259</p>
      <h2>Counter: {count}</h2>
      <button onClick={handleDecrement} disabled={count === -5}>Decrement</button>
      <button onClick={handleIncrement} disabled={count === 5}>Increment</button>
      {count === 5 || count === -5 ? (
        <p className="error">Counter must be within the range of -5 to 5</p>
      ) : null}
    </div>
  );
}

export default Counter;