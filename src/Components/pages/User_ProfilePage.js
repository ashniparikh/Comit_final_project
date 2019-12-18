import React from 'react';
import Nav from './../../Nav';
import Sidebar from './../../Sidebar';

function User_ProfilePage(props) {
    
    return (
        <div>
            <header>
                <Nav/>
                <Sidebar/>
            </header>
            <main>
                <div className="newCustbox">
                {props.User_Details.map(function(User_Detail) {
                    return (

                        <form>
                        
                            <h2>{User_Detail.fullname}</h2>
                         
                        
                        
                            <lable className="labelusername" htmlFor="name"><b>Username:</b></lable>
                            <input type="name" value={User_Detail.username}/>
                        
                        
                            <lable  htmlFor="email" className="emailProfile"><b>Email Id:</b></lable>
                            <input type="email" value={User_Detail.emailid}/>
                            
                        
                            <lable className="labelid" htmlFor="name"><b>Employee Id:</b></lable>
                            <input type="number" id="empid" value={User_Detail.empid}/>
                        
                                 
                            <lable htmlFor="contact" className="contactProfile"><b>Contact No:</b></lable>
                            <input type="contact" value={User_Detail.contact}/>
                         
                        
                            <lable className="labeladdress" htmlFor="name"><b>Address:</b></lable>
                            <input type="text" value={User_Detail.address}/>
                              
                           
                            <lable htmlFor="date" className="dateProfile"><b>Date of Birth:</b></lable>
                            <input type="text" value={User_Detail.dob}/>
                        
                        
                            <lable className="input-container"><b>Gender:</b></lable>
                            <input type="text" value={User_Detail.gender}/>
                        
                        
                            <lable htmlFor="date" className="dateProfile"><b>Registered at:</b></lable>
                            <input type="text" value={User_Detail.joiningDate}/>
                        
                        </form>
                    )
                })}
                </div>
            </main>
        </div>
    );
}

export default User_ProfilePage;