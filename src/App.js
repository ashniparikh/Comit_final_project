import React from 'react';
import { Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './Components/pages/HomePage';
import LoginPage from './Components/forms/LoginForm';
import SignUpPage from './Components/pages/SignUpPage';
import DashboardPage from './Components/pages/DashboardPage';
import New_CustPage from './Components/pages/New_CustPage';
import Add_UserPage from './Components/pages/Add_UserPage';
import User_ProfilePage from './Components/pages/User_ProfilePage';
import Edit_CustPage from './Components/pages/Edit_CustPage';


import './App.css';

function App() {
  let [search,setSearch]=React.useState('');
  let User_Details=
  [{
    "empid": 7,
    "username": "ash",
    "fullname": "Ash Patel",
    "emailid": "ash@gmail.com",
    "contact": "416-228-4020",
    "dob": "09/02/1990",
    "gender": "Female",
    "address" : "4 Wall street, SK, Saskatchewan,S9H 5J9",
    "joiningDate" : "2016/07/09"
 
},

  ];

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
      <Route path="/userProfile" exact >
        <User_ProfilePage
           User_Details={User_Details}
           username={username} 
           />
      </Route>
      <Route path="/editCust/:id" exact component ={Edit_CustPage}/>

    </div>
  );
}

export default App;
