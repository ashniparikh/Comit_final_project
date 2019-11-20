import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/pages/HomePage';
import LoginPage from './Components/pages/LoginPage';
import SignUpPage from './Components/pages/SignUpPage';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignUpPage} />
      
      
    </div>
  );
}

export default App;
