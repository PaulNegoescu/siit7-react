import { useState } from 'react';

import styles from './Counter.module.css';

export default function Counter() {
  // hook for component level state
  const [value, setValue] = useState(0);

  const displayClass =
    value < 0 ? styles.negative : value > 0 ? styles.positive : '';

  return (
    <>
      <h1>Counter</h1>
      <p>
        <strong className={displayClass}>{value}</strong>
      </p>
      <button onClick={() => setValue(value - 1)}>-</button>
      <button onClick={() => setValue(value + 1)}>+</button>
    </>
  );
}
