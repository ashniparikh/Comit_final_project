import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/pages/HomePage';
import LoginPage from './Components/forms/LoginForm';
import SignUpPage from './Components/pages/SignUpPage';
import ForgotPasswordPage from './Components/pages/ForgotPasswordPage';
import ForgotEmailPage from './Components/pages/ForgotEmailPage';
import DashboardPage from './Components/pages/DashboardPage';
import New_CustPage from './Components/pages/New_CustPage';
import Add_UserPage from './Components/pages/Add_UserPage';
import User_ProfilePage from './Components/pages/User_ProfilePage';

import './App.css';

function App() {
  let [search,setSearch]=React.useState('');
  
  let Cust_Names= 
[{
    "id": 1,
    "name": "Tom shoi",
    "contact": "234-876-4567"
},
{
    "id": 2,
    "name": "Jigar Patel",
    "contact": "234-876-4567"
},
{
    "id": 3,
    "name": "Tammy Atval",
    "contact": "294-782-8614"
},
{
    "id": 4,
    "name": "Gabby Rio",
    "contact": "604-987-3658"
},
{
    "id": 5,
    "name": "Mandy Kahler",
    "contact": "390-726-7438"
},
{
    "id": 6,
    "name": "Ziya Shah",
    "contact": "416-577-3748"
},
];
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
        <DashboardPage 
        username={username} 
        search={search} 
        setSearch={setSearch} 
        Cust_Names={Cust_Names}
        />
      </Route>
      <Route path="/newCust" exact component={New_CustPage} />
      <Route path="/addUser" exact component={Add_UserPage} />
      <Route path="/userProfile" exact component={User_ProfilePage} />

    </div>
  );
}

export default App;
