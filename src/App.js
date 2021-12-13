import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
