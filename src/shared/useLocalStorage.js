import { useState } from 'react';

export function useLocalStorage(initialState, name) {
  const [state, setState] = useState(loadInitialState);

  function loadInitialState() {
    const item = localStorage.getItem(name);
    return item || initialState;
  }

  function mySetState(value) {
    if (value === null) {
      localStorage.removeItem(name);
    } else {
      localStorage.setItem(name, value);
    }
    setState(value);
  }

  return [state, mySetState];
}
