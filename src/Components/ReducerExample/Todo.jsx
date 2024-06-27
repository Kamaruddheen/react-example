import React from "react"; // Import React to use JSX and component features
import { ACTIONS } from "./ReducerExample2"; // Import action types from ReducerExample2

// Functional component to render a single todo item
function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {/* Style the todo name based on its completion status */}
        {todo.name} {/* Display the content of the todo */}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Toggle {/* Button to toggle the completion status of the todo */}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Delete {/* Button to delete the todo */}
      </button>
    </div>
  );
}

export default Todo; // Export the component as default
