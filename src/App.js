import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/pages/HomePage';
import LoginPage from './Components/forms/LoginForm';
import SignUpPage from './Components/pages/SignUpPage';
import ForgotPasswordPage from './Components/pages/ForgotPasswordPage';
import ForgotEmailPage from './Components/pages/ForgotEmailPage';
import DashboardPage from './Components/pages/DashboardPage';

import './App.css';

function App() {
  let [username ,setUsername] = React.useState('');
  return (
    <div className="App">
      
      <Route path="/" exact component={HomePage} />
      
      <Route path="/login" exact>
        <LoginPage username={username} setUsername={setUsername} />
      </Route>
      <Route path="/signup" exact component={SignUpPage} />
      <Route path="/forgotPassword" exact component={ForgotPasswordPage} />
      <Route path="/forgotEmail" exact component={ForgotEmailPage} />
      <Route path="/dashboardpage" exact >
        <DashboardPage username={username} />
      </Route>
      

      
      
    </div>
  );
}

export default App;
