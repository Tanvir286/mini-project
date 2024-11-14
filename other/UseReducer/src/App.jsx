import React, { useReducer } from 'react';

// Initial state for the reducer
let initialState = {
  count: 0,
};

// Reducer function to handle actions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      // Use if to prevent the count from going below zero
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return state;  // Return the same state if count is 0
      }
    case 'reset':
      return { count: 0 };  // Reset count to 0
    default:
      return state;
  }
}

const App = () => {
  // useReducer hook to manage state using the reducer
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Plus</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Minus</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button> {/* New Reset button */}
    </div>
  );
};

export default App;
