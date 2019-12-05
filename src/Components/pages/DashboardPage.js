import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './../../Nav';




function DashboardPage(props) {
    

    function handleSearchChange(event){
        props.setSearch(event.target.value);
    };
    
    const filteredNames = props.Cust_Names.filter( Cust_Name =>{
        return Cust_Name.name.toLowerCase().indexOf( props.search.toLowerCase() ) !== -1
    })

    return (
        <div className="dashboard-container">
            <header>
                <Nav/>
            </header>
            <main>
            <div className="welcome">
                <h1>Welcome {props.username}</h1>
                </div>
                <div className="search-container" id="search">
                    <input 
                        type="text" 
                        placeholder="Search.." 
                        name="search2" 
                        onChange={handleSearchChange}
                        value={props.search}
                    />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
                <div className="search-name">
                {filteredNames.map(function(Cust_Name) {
                    return (
                        <div className="search" key={props.Cust_Names.id}>
                            <ul id="myUL">
                                <li><a href="#">{Cust_Name.name}</a></li>
                            </ul>
                        </div>
                    )
                })}
                </div>
                
                <div id="mySidenav" class="sidenav">
                    <Link to ="/newCust" id="new_customer">New Customer</Link>
                    <Link to ="/addUser" id="add_user">Add New User</Link>
                    <Link to ="/userProfile" id="user_profile">User Profile</Link>
                </div>
                

            </main>
            
        </div>
    );
}
export default DashboardPage;