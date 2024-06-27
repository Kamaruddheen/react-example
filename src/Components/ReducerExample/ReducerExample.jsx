import { useReducer, useState } from "react"; // Import useReducer and useState hooks from React

// Define action types as constants to avoid hardcoding strings
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

// Reducer function to handle state changes based on dispatched actions
function reducer(state, action) {
  switch (action) {
    case ACTIONS.INCREMENT: // If the action is 'INCREMENT'
      return { count: state.count + 1 }; // Increase the count by 1
    case ACTIONS.DECREMENT: // If the action is 'DECREMENT'
      return { count: state.count - 1 }; // Decrease the count by 1
    default: // If the action type doesn't match any case
      return state; // Return the current state unchanged
  }
}

function ReducerExample() {
  // Initialize useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // The following lines are commented out and use useState for comparison purposes
  // const [count, setCount] = useState(0);

  // function increment() {
  //   setCount((count) => count + 1);
  // }

  // function decrement() {
  //   setCount((count) => count - 1);
  // }

  return (
    <>
      <h5>Increment & Decrement using useReducer</h5>{" "}
      <button onClick={() => dispatch(ACTIONS.DECREMENT)} type="button">
        - {/* Button to decrement the count, dispatches the DECREMENT action */}
      </button>
      <span>{state.count}</span> {/* Display the current count */}
      <button onClick={() => dispatch(ACTIONS.INCREMENT)} type="button">
        + {/* Button to increment the count, dispatches the INCREMENT action */}
      </button>
    </>
  );
}

export default ReducerExample; // Export the component as default
