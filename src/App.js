import React,{ useState }  from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import useToken from './components/useToken';
import MessageTemplate from './components/MessageTemplate';
import MyMessage from './components/MyMessage';
import ChatFeed from './components/ChatFeed';



function App() {
  

  return (
    <div className="App">
      <ChatFeed />
    </div>
  );
}

export default App;
