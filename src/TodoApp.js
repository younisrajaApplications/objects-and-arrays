import React, { useReducer, useState } from 'react';

// Step 1: Define the reducer function (as shown above)
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), task: action.task }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'RESET_TODOS':
      return [];
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function TodoApp() {
  // Step 2: Initialize useReducer with the reducer function and initial state
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState(''); // Local state for input field

  // Step 3: Update the addTodo function to dispatch actions
  const addTodo = () => {
    if (task.trim() !== '') {
      dispatch({ type: 'ADD_TODO', task: task }); // Dispatch action to add a todo
      setTask(''); // Clear the input
    }
  };

  // Step 4: Render the UI
  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add Task</button>
      <button onClick={() => dispatch({ type: 'RESET_TODOS' })}>Reset Todos</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
