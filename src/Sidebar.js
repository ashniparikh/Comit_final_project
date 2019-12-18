import React from 'react';
import {Link} from 'react-router-dom'; 

function Sidebar(){
    return(
        <div class="sidebar">
        <Link to="/dashboardpage" class="active"> Home</Link>
        <Link to="/newCust"> New Customer</Link>
        <Link to="/addUser">New User</Link>
        <Link to="/userProfile">Profile</Link>
        </div>
    )
}
 export default Sidebar;