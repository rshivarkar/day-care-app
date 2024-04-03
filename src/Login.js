// Login.js
import React, { useState } from 'react';
import './App.css'; // Import the CSS file with styles

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }

    // Mock API call to check credentials
    // Replace this with actual API call
    const isValidUser = true; // Example: Assume user is valid

    if (isValidUser) {
      onLogin(username);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
