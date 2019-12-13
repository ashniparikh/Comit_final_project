import React,{useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './../../Nav';




function DashboardPage(props) {
    
    let[custName,setCustName]=React.useState([]);
    let[hasError, setErrors] = React.useState(false);

    function handleSearchChange(event){
        props.setSearch(event.target.value);
    };
    
    useEffect(() => {
        const abortController = new AbortController();
        async function fetchData(){
            const res = await fetch('http://localhost:4000/backend_db/', { signal: abortController.signal});
            res
                .json()
                .then(res =>setCustName(res))
                .catch(err => setErrors(err));
            
    }
    fetchData();
    return () => {
        abortController.abort();
      };
  },[]);

  

    const filteredNames = custName.filter( function(Cust_Name){
        if (Cust_Name.fullname.toLowerCase().includes(props.search.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        });
    

    
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
                        placeholder="Search Customer" 
                        name="search2" 
                        onChange={handleSearchChange}
                        value={props.search}
                    />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
                <div className="search-name">
                {filteredNames.map(function(Cust_Name) {
                    return (
                        <div className="search">
                            <ul id="myUL">
                                <li><Link to ={"/editcust/"+Cust_Name._id}id="current_customer">{Cust_Name.fullname}</Link></li>
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