import React,{ useState }  from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import useToken from './components/useToken';



function App() {
  

  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
