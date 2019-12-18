import React,{useEffect,useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './../../Nav';
import Sidebar from './../../Sidebar';




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

  useLayoutEffect (()=>{
    async function fetchData(){
            const res = await fetch('http://localhost:4000/backend_db/');
            res
                .json()
                .then(res =>setCustName(res))
                .catch(err => setErrors(err));
            
    }
    fetchData();
  });

  

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
                <Sidebar/>
            </header>
            <main>
            <div className="welcome">
                <h3>Welcome {props.username}</h3>
                </div>
                <div className="search-container" id="searchbox">
                    <input 
                        type="text" 
                        placeholder="Search Customer..." 
                        name="search2" 
                        onChange={handleSearchChange}
                        value={props.search}
                    />
                    
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
                
                
                

            </main>
            
        </div>
    );
}
export default DashboardPage;