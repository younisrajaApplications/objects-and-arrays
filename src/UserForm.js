import React, { useReducer } from 'react';

// Step 1: Define the reducer function (as shown above)
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      return {
        name: '',
        email: '',
        age: '',
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function UserForm() {
  // Step 2: Initialize useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(formReducer, { name: '', email: '', age: '' });

  // Step 3: Update the handleChange function to dispatch actions
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD_VALUE', field: name, value: value });
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info:', state); // You can send the data to a server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="age"
        value={state.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: 'RESET_FORM' })}>
        Reset
      </button>
    </form>
  );
}

export default UserForm;
