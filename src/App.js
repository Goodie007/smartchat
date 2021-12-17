import React,{ useState }  from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import useToken from './components/useToken';
import MessageTemplate from './components/MessageTemplate';



function App() {
  

  return (
    <div className="App">
      <MessageTemplate />
    </div>
  );
}

export default App;
