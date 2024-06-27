import { useReducer, useState } from "react";
import Todo from "./Todo";

// Define action types as constants to avoid hardcoding strings
export const ACTIONS = {
  ADD_TODO: "add-todo", // Action type for adding a new todo
  TOGGLE_TODO: "toggle-todo", // Action type for toggling the completion status of a todo
  DELETE_TODO: "delete-todo" // Action type for deleting a todo
};

// Reducer function to handle state changes based on dispatched actions
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: // If the action is 'ADD_TODO'
      return [...todos, newTodo(action.payload.name)]; // Add a new todo to the list
    case ACTIONS.TOGGLE_TODO: // If the action is 'TOGGLE_TODO'
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }; // Toggle the 'complete' status of the specified todo
        }
        return todo; // Return the unchanged todo
      });
    case ACTIONS.DELETE_TODO: // If the action is 'DELETE_TODO'
      return todos.filter((todo) => todo.id !== action.payload.id); // Remove the specified todo from the list
    default: // If the action type doesn't match any case
      return todos; // Return the current state unchanged
  }
}

// Helper function to create a new todo item with a unique id and a name
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }; // Return a new todo object
}

function ReducerExample2() {
  // Initialize useReducer with the reducer function and initial state (empty array)
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState(""); // useState hook to manage the todo information input

  // Handle form submission to add a new todo
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the page from refreshing
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } }); // Dispatch the 'ADD_TODO' action with the name payload
    setName(""); // Clear the name input after submitting
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h5>useReducer - Todo</h5>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update the name state on input change
        />
      </form>

      {/* Map over the todos array to render each todo item using the Todo component */}
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default ReducerExample2;
