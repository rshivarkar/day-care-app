import React, { useState } from 'react';
import Login from './Login';
import HomePage from './HomePage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  return (
    <div>
      {!loggedIn ? <Login onLogin={handleLogin} /> : <HomePage username={username} />}
    </div>
  );
};

export default App;
