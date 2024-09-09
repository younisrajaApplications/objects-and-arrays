import React, { useState } from 'react';

function UserForm() {
  const [user, setUser] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,  // Spread previous state to retain other values
      [name]: value, // Dynamically update the specific property
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info:', user); // You can send the data to a server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
