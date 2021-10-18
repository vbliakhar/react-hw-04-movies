import React from "react";
import { useReducer } from "react";

function countReducer(state, action) {
  // return prevState + nexState;
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    // return console.log(state);

    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
    // throw new Error(`Unsupported action type  ${action.type}`);
  }
}
const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, {
    count: 0,
    helper: [1, 2, 3, 4, 5, 6],
  });
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <h1>{count.count}</h1>
    </div>
  );
};

export default Counter;
