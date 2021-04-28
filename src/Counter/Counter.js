import { useReducer } from 'react';

import styles from './Counter.module.css';

export default function Counter() {
  // hook for component level state
  const [value, dispatch] = useReducer(myReducer, {
    count: 0,
    step: 1,
  });

  function myReducer(state, action) {
    const newState = { ...state };

    switch (action.type) {
      case 'INC':
        newState.count = state.count + state.step;
        break;
      case 'DEC':
        newState.count = state.count - state.step;
        break;
      case 'SET_STEP':
        newState.step = action.payload;
        break;
      default:
        break;
    }

    return newState;
  }

  const displayClass =
    value.count < 0 ? styles.negative : value.count > 0 ? styles.positive : '';

  return (
    <>
      <h1>Counter</h1>
      <p>
        <strong className={displayClass}>{value.count}</strong>
      </p>
      <input
        type="number"
        value={value.step}
        onChange={(e) =>
          dispatch({ type: 'SET_STEP', payload: Number(e.target.value) })
        }
      />
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
    </>
  );
}
